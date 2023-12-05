import { SafeAreaView, View, ScrollView, StyleSheet, Platform } from "react-native";
import { Text, Switch } from "@rneui/base";
import { useDispatch, useSelector } from "react-redux";
import AppHeader from "../components/Header";
import { Theme } from "../utils/constants";
import { setTheme } from "../redux/reducers/settingsReducer";

const SettingsScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const { mode } = useSelector((state) => state.settings);

	const changeTheme = (value) => {
		if (value === true) {
			dispatch(setTheme("dark"));
		} else {
			dispatch(setTheme("light"));
		}
	}
 
  return (
	<SafeAreaView style={{ flex: 1 }}>
	  <AppHeader navigation={navigation} />
	  <View style={styles.row}>
		<Text>Dark Mode: {mode} </Text>
		<Switch
		  value={mode === "dark" ? true : false}
		  onValueChange={(value) => changeTheme(value)}
		/>
	  </View>
	  <ScrollView style={styles.container}>
		<Text>Information about open source packages used.	</Text>
	  </ScrollView>
	</SafeAreaView>
  );
}

const styles = StyleSheet.create({
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginHorizontal: Platform.OS === "ios" ? 18 : 20,
		marginVertical: 18,		
	},
	container: {
		marginHorizontal: Platform.OS === "ios" ? 18 : 20,
	},
});

export default SettingsScreen;
