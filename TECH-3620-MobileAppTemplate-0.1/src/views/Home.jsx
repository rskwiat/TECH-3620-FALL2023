import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, SafeAreaView, ScrollView, StyleSheet, Platform } from "react-native";
import { Text, Button, SearchBar } from "@rneui/base";

import AppHeader from "../components/Header";
import Card from "../components/Card";

import { fetchRandomRecipe } from "../redux/reducers/thunks";

const HomeView = ({ navigation }) => {
	const dispatch = useDispatch();
	const { data, loading, errors } = useSelector((state) => state.recipes);
	
	useEffect(() => {
		if (loading === true) {
			dispatch(fetchRandomRecipe());
		}
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
				<ScrollView>
					{data[0]?.recipes?.map((recipe) => {
						return <Card 
							title={recipe.title}
							image={recipe.image}
							id={recipe.id}
							key={recipe.id} 
							/>
					})}
				</ScrollView>
				
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
