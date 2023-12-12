import React from "react";
import { useSelector } from "react-redux";
import { View, Image, StyleSheet, ScrollView, SafeAreaView, Platform } from "react-native";
import { Text, Button } from "@rneui/base";

import AppHeader from "../components/Header";
import { Theme } from "../utils/constants";
const RecipeView = ({ navigation }) => {
	const { selectedRecipe } = useSelector((state) => state.recipes);
	const { mode } = useSelector((state) => state.settings);

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: Theme[mode].background }}>
			<AppHeader navigation={navigation} />
			<Image
				style={{ width: "100%", height: 200 }}
				source={{ uri: selectedRecipe.image }}
			/>
			<ScrollView style={styles(mode).container}>
				<Text h3 h3Style={styles(mode).header}>{selectedRecipe?.title}</Text>
				<Text h4 h4Style={styles(mode).listHeader}>Ingredients:</Text>
				{selectedRecipe?.extendedIngredients?.map((ingredients, i) => {
					return <Text key={i} style={styles(mode).list}>{ingredients.original}</Text>
				})}
				<Text style={styles(mode).instructions}>{selectedRecipe?.instructions}</Text>
				<Button
					title="Home"
					onPress={() => navigation.navigate("Home")}
				/>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = (mode) => StyleSheet.create({
	container: {
		marginTop: 20,
		paddingHorizontal: Platform.OS === "ios" ? 18 : 20,
	},
	header: {
		fontWeight: "bold",
		marginBottom: 10,
		color: Theme[mode].text,
	},
	listHeader: {
		marginBottom: 10,
		color: Theme[mode].text,
	},
	list: {
		paddingLeft: 10,
		fontSize: 15,
		lineHeight: 22,
		color: Theme[mode].text,
	},
	instructions: {
		fontSize: 15,
		marginVertical: 10,
		lineHeight: 22,
		color: Theme[mode].text,
	}
})

export default RecipeView;
