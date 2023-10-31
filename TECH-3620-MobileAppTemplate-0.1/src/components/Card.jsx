import { Text, Button } from "@rneui/base";
import { View, StyleSheet, Image } from "react-native";

const Card = ({ title, image, id }) => {
	return (
		<View>
			<Image source={{ uri: image }} style={{ width: 357, height: 200 }} />
			<Text>{title}</Text>
			<Button title="Go to recipe" />
		</View>
	);
}

export default Card;
