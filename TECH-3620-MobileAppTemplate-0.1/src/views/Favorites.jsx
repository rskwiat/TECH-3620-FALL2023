import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView, StyleSheet, View, Platform, ScrollView } from "react-native";
import { Text } from "@rneui/base";

import AppHeader from "../components/Header";
import Card from "../components/Card";
import { removeFromFavorites } from "../redux/reducers/recipeReducer";

const FavoritesView = ({ navigation }) => {
	const dispatch = useDispatch();
	const { favorites } = useSelector((state) => state.recipes);

	return (
		<SafeAreaView>
			<AppHeader navigation={navigation} />
			<View style={styles.container}>
				{favorites.length === 0 ?
					<Text style={styles.warning}>No Favorites Found</Text> : 
					<Text style={styles.header}>Your saved recipes</Text>
				}
				<ScrollView>
				{favorites.map((favorite) => {
					return (
						<Card
							type="favorites"
							title={favorite.title}
							image={favorite.image}
							id={favorite.id}
							key={favorite.id}
							onButtonPress={() => dispatch(removeFromFavorites(favorite.id))}
						/>
					);
				})}
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	warning: {
		color: "#f39c12",
		borderColor: "#f39c12",
		borderWidth: 1,
		borderRadius: 5,
		marginTop: 20,
		padding: 10,
		textAlign: "center"
	},
	container: {
		marginHorizontal: Platform.OS === "ios" ? 18 : 20,
	},
	header: {
		fontStyle: "italic",
		fontSize: 15,
		marginBottom: 10,
		marginTop: 20,
	}
});	

export default FavoritesView;
