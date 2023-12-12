import { Text, Button } from "@rneui/base";
import { useDispatch, useSelector } from "react-redux";
import { View, StyleSheet, ImageBackground } from "react-native";

import { getRecipeInformation } from "../redux/reducers/thunks";
import { Theme } from "../utils/constants";

const Card = ({ navigation, type, title, image, id, onButtonPress }) => {
	const { mode } = useSelector((state) => state.settings);
	const dispatch = useDispatch();

	const goToRecipe = (id) => {
		dispatch(getRecipeInformation(id));
		navigation.navigate("Recipe");
	}

	return (
		<View style={styles(mode).card}>
			<ImageBackground
				source={{ uri: image }}
				style={styles(mode).backgroundImage}
				resizeMode="cover"
			/>
			<Text style={styles(mode).text}>{title}</Text>

			<View style={styles(mode).buttonWrapper}>
				<Button
					title="Go to recipe"
					buttonStyle={{ width: "100%" }}
					onPress={() => goToRecipe(id)}
				/>

				<Button
					icon={{
						name: type === "favorite" ? "trash" : "heart",
						type: "ionicon",
						size: 22,
						color: "#fff"
					}}
					color="#e74c3c"
					onPress={onButtonPress}
				/>
			</View>
		</View>
	);
}

const styles = (mode) => StyleSheet.create({
	backgroundImage: {
		height: 200,
		flex: 1,
		justifyContent: "center"
	},
	text: {
		marginVertical: 10,
		fontSize: 16,
		fontWeight: "bold",
		color: Theme[mode].text,
	},
	buttonWrapper: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	card: {
		marginBottom: 20,
		borderColor: "#ccc",
		borderWidth: 1,
		padding: 20,
		borderRadius: 15,
		backgroundColor: Theme[mode].background,
	}
});

export default Card;
