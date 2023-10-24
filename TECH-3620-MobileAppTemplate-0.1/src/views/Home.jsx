import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, SafeAreaView, StyleSheet, Platform } from "react-native";
import { Text, Button, SearchBar } from "@rneui/base";

import AppHeader from "../components/Header";
import { fetchRandomRecipe } from "../redux/reducers/thunks";

const HomeView = ({ navigation }) => {
	const dispatch = useDispatch();
	const { data, loading, errors } = useSelector((state) => state.recipes);
	
	useEffect(() => {
		dispatch(fetchRandomRecipe());
	}, []);
	
	const [search, setSearch] = useState("");	

	return (
		<SafeAreaView>
			<AppHeader navigation={navigation} />
			<View style={styles.container}>
				<SearchBar
					placeholder="Please search for your reciepe..." 
					lightTheme
					onChangeText={(value) => setSearch(value)}
					value={search}
					containerStyle={styles.inputContainer}
					inputContainerStyle={styles.input}
				/>

				<Text style={styles.header}>Today's Recommended:</Text>

				{data?.recipes?.map((recipe) => {
					return (
						<Text>{recipe.title}</Text>
					);
				})}
				
				<Button title="Favorites" onPress={() => navigation.navigate("Favorites")} />
				<Button title="Recipes" onPress={() => navigation.navigate("Recipe")} />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: Platform.OS === "ios" ? 18 : 20,
	},
	inputContainer: {
		padding: 0,
		marginVertical: 10,		
	},
	input: {
		backgroundColor: "#fff",
	},
	header: {
		fontStyle: "italic",
		fontSize: 15,
		marginBottom: 10,
	}
})

export default HomeView;
