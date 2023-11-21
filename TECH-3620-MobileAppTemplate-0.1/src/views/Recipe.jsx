import React from "react";
import { useSelector } from "react-redux";
import { View, Image, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { Text, Button } from "@rneui/base";

import AppHeader from "../components/Header";

const RecipeView = ({ navigation }) => {
	const { selectedRecipe } = useSelector((state) => state.recipes);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<AppHeader navigation={navigation} />
			<Image
				style={{ width: "100%", height: 200 }}
				source={{ uri: selectedRecipe.image }}
			/>

			<ScrollView>
				<Text h3>{selectedRecipe?.title}</Text>
				<Text h4>Ingredients:</Text>
				{selectedRecipe?.extendedIngredients?.map((ingredients, i) => {
					return <Text key={i}>{ingredients.original}</Text>
				})}
				<Text>{selectedRecipe?.instructions}</Text>
				<Button
					title="Home"
					onPress={() => navigation.navigate("Home")}
				/>
			</ScrollView>


		</SafeAreaView>
	);
}

export default RecipeView;
