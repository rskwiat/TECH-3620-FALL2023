import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, SafeAreaView, ScrollView, StyleSheet, Platform } from "react-native";
import { Text } from "@rneui/base";

import AppHeader from "../components/Header";
import Card from "../components/Card";

import { removeFromFavorites } from "../redux/reducers/recipeReducer";

const FavoritesView = ({ navigation }) => {
	const dispatch = useDispatch();
	const { favorites } = useSelector((state) => state.recipes);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<AppHeader navigation={navigation} />
			<View>
				{favorites.length === 0 ? <Text>No Favorites Found</Text> : <Text>Favorites:</Text>}
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

export default FavoritesView;
