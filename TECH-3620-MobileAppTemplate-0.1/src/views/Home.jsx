import React from "react";
import { View } from "react-native";
import { Text, Button } from "@rneui/base";

const HomeView = ({ navigation }) => {
	return (
		<View>
			<Text>Home</Text>
			<Button title="Favorites" onPress={() => navigation.navigate("Favorites")} />
			<Button title="Settings" onPress={() => navigation.navigate("Settings")} />
			<Button title="Recipes" onPress={() => navigation.navigate("Recipe")} />
		</View>
	);
}

export default HomeView;
