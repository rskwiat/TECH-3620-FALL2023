import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, SafeAreaView, ScrollView, StyleSheet, Platform } from "react-native";
import { Text, Button, SearchBar } from "@rneui/base";

import AppHeader from "../components/Header";
import Card from "../components/Card";

import { fetchRandomRecipe, getSearchItem } from "../redux/reducers/thunks";
import { addToFavorites } from "../redux/reducers/recipeReducer";
import { Theme } from "../utils/constants";

const HomeView = ({ navigation }) => {
	const dispatch = useDispatch();
	const { data, loading, errors } = useSelector((state) => state.recipes);
	const { mode } = useSelector((state) => state.settings);
	
	useEffect(() => {
		if (loading === true) {
			dispatch(fetchRandomRecipe());
		}
	}, []);
	
	const [search, setSearch] = useState("");
	const [headerText, setHeaderText] = useState("Today's Recommended:")

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: Theme[mode].background }}>
		<AppHeader navigation={navigation} />
			<View style={styles(mode).container}>
				<SearchBar
					placeholder="Please search for your reciepe..." 
					lightTheme={mode === "dark" ? false : true }
					onChangeText={(value) => setSearch(value)}
					value={search}
					containerStyle={styles(mode).inputContainer}
					inputContainerStyle={styles(mode).input}
					autoCapitalize="none"
					onSubmitEditing={() => {
						dispatch(getSearchItem(search));
						setHeaderText("Search Results:");
					}}
				/>

				<Text style={styles(mode).header}>{headerText}</Text>
				<ScrollView>
					{data[0]?.recipes?.map((recipe) => {
						return <Card
							navigation={navigation}
							title={recipe.title}
							image={recipe.image}
							id={recipe.id}
							key={recipe.id}
							onButtonPress={() => dispatch(addToFavorites(recipe))}
						/>
					})}
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}

const styles = (mode) => StyleSheet.create({
	container: {
		marginHorizontal: Platform.OS === "ios" ? 18 : 20,
	},
	inputContainer: {
		padding: 0,
		marginVertical: 10,	
		border: 0,	
	},
	input: {
		border: 0,
		backgroundColor: Theme[mode].background,
	},
	header: {
		fontStyle: "italic",
		fontSize: 15,
		marginBottom: 10,
		color: Theme[mode].text
	}
});

export default HomeView;
