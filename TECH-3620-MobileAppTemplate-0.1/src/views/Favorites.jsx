import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, SafeAreaView, ScrollView, StyleSheet, Platform } from "react-native";
import { Text } from "@rneui/base";

import AppHeader from "../components/Header";
import Card from "../components/Card";

import { removeFromFavorites } from "../redux/reducers/recipeReducer";
import { Theme } from "../utils/constants";

const FavoritesView = ({ navigation }) => {
	const dispatch = useDispatch();
	const { favorites } = useSelector((state) => state.recipes);
	const { mode } = useSelector((state) => state.settings);

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: Theme[mode].background }}>
			<AppHeader navigation={navigation} />
			<View>
				{favorites.length === 0 ? <Text style={styles(mode).text}>No Favorites Found</Text> : <Text style={styles(mode).text}>Favorites:</Text>}
			</View>
			<ScrollView>
				{favorites?.map((recipe) => {
					return <Card
						navigation={navigation}
						type="favorite"
						title={recipe.title}
						image={recipe.image}
						id={recipe.id}
						key={recipe.id}
						onButtonPress={() => dispatch(removeFromFavorites(recipe.id))}
					/>
				})}
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = (mode) => StyleSheet.create({
	text: {
		color: Theme[mode].text
	}
});

export default FavoritesView;
