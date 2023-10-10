import React from "react";
import { View, SafeAreaView, StyleSheet, Platform } from "react-native";
import { Text, Button } from "@rneui/base";

import AppHeader from "../components/Header";

const HomeView = ({ navigation }) => {
	return (
		<SafeAreaView>
			<AppHeader navigation={navigation} />
			<View style={styles.container}>
				<Text>Home</Text>
				<Button title="Favorites" onPress={() => navigation.navigate("Favorites")} />
				<Button title="Recipes" onPress={() => navigation.navigate("Recipe")} />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: Platform.OS === "ios" ? 18 : 20,
	}
})

export default HomeView;
