import { StyleSheet, View } from "react-native";
import { Text } from "@rneui/themed";

const App = () => {
	return (
		<View style={styles.container}>
			<Text h1>Hello World</Text>
		</View> 
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default App;
