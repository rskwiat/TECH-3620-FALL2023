import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, SafeAreaView, StyleSheet, Platform, ImageBackground, ScrollView } from "react-native";
import { Text, Button, SearchBar } from "@rneui/base";

import AppHeader from "../components/Header";
import { fetchRandomRecipe } from "../redux/reducers/thunks";

const HomeView = ({ navigation }) => {
	const dispatch = useDispatch();
	const { data, loading } = useSelector((state) => state.recipes);
	const [search, setSearch] = useState("");

	useEffect(() => {
		if (loading === true) {
			dispatch(fetchRandomRecipe());
		}
	},[]); 

	return (
		<SafeAreaView style={{ flex: 1 }}>
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
				{data?.recipes?.map((recipe) => {
					return (
						<View style={styles.card} key={recipe.id}>
							<View style={styles.cardTextBackground}>
								<Text h4 style={styles.cardText}>{recipe.title}</Text>
							</View>
							<ImageBackground 
								style={styles.imageBackground}
								resizeMode="cover"
								source={{ uri: recipe.image }}
							/>
						</View>
					)
				})}
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
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
	},
	imageBackground: {
			flex: 1,
			justifyContent: 'center',
	},
	card: {
		height: 200,
		width: 355,
		position: "relative",
		marginBottom: 10,
	},
	cardTextBackground: {
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		width: "100%",
		height: "20%",
		position: "absolute",
		bottom: 0,
		zIndex: 5,
	},
	cardText: {
		position: "relative",
		bottom: -5,
		left: 10,
		color: "#fff",
	}
})

export default HomeView;
