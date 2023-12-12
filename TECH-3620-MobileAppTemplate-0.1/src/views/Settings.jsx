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
		const themeVal = value === true ? "dark" : "light";
		dispatch(setTheme(themeVal));
	}
 
  return (
	<SafeAreaView style={{ flex: 1, backgroundColor: Theme[mode].background }}>
	  <AppHeader navigation={navigation} />
	  <View style={styles(mode).row}>
		<Text style={styles(mode).text}>Dark Mode: {mode} </Text>
		<Switch
		  value={mode === "dark" ? true : false}
		  onValueChange={(value) => changeTheme(value)}
		/>
	  </View>
	  <ScrollView style={styles(mode).container}>
		<Text style={styles(mode).text}>Information about open source packages used.
		</Text>
	  </ScrollView>
	</SafeAreaView>
  );
}

const styles = (mode ) => StyleSheet.create({
	text: {
		color: Theme[mode].text
	},
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
