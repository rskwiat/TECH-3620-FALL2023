import React from "react";
import { useSelector } from "react-redux";
import { View, Image, StyleSheet, ScrollView, SafeAreaView, Platform } from "react-native";
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

			<ScrollView style={styles.container}>
				<Text h3 h3Style={styles.header}>{selectedRecipe?.title}</Text>
				<Text h4 h4Style={styles.listHeader}>Ingredients:</Text>
				{selectedRecipe?.extendedIngredients?.map((ingredients, i) => {
					return <Text key={i} style={styles.list}>{ingredients.original}</Text>
				})}
				<Text style={styles.instructions}>{selectedRecipe?.instructions}</Text>
				<Button
					title="Home"
					onPress={() => navigation.navigate("Home")}
				/>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		paddingHorizontal: Platform.OS === "ios" ? 18 : 20,
	},
	header: {
		fontWeight: "bold",
		marginBottom: 10,
	},
	listHeader: {
		marginBottom: 10,
	},
	list: {
		paddingLeft: 10,
		fontSize: 15,
		lineHeight: 22,
	},
	instructions: {
		fontSize: 15,
		marginVertical: 10,
		lineHeight: 22,
	}
})

export default RecipeView;
