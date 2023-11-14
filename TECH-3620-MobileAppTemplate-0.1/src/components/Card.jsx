import { Text, Button } from "@rneui/base";
import { View, StyleSheet, ImageBackground } from "react-native";

const Card = ({ type, title, image, id, onButtonPress }) => {
	return (
		<View style={styles.card}>
			<ImageBackground
				source={{ uri: image }}
				style={styles.backgroundImage}
				resizeMode="cover"
			/>
			<Text style={styles.text}>{title}</Text>

			<View style={styles.buttonWrapper}>
				<Button
					title="Go to recipe"
					buttonStyle={{ width: "100%" }}
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

const styles = StyleSheet.create({
	backgroundImage: {
		height: 200,
		flex: 1,
		justifyContent: "center"
	},
	text: {
		marginVertical: 10,
		fontSize: 16,
		fontWeight: "bold",
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
		backgroundColor: "#fff"
	}
})

export default Card;
