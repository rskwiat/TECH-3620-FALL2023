import React, { useState } from "react";
import { View, SafeAreaView, StyleSheet, Platform } from "react-native";
import { Text, Button, SearchBar } from "@rneui/base";

import AppHeader from "../components/Header";

const HomeView = ({ navigation }) => {
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
