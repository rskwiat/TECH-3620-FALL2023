import { useColorScheme } from "react-native";
import { Header, Icon } from "@rneui/base";
import { useSelector } from "react-redux";
import { Theme } from "../utils/constants";

const AppHeader = ({ navigation }) => {
	const { mode } = useSelector((state) => state.settings);
	// const mode = useColorScheme();

	return (
		<Header
			leftComponent={
				<Icon
					type="ionicon"
					name="people-sharp"
					onPress={() => console.log("profile")}
					color={Theme[mode].text}

				/>
			}
			placement="left"
			centerComponent={{
				text: "Broke Foodie",
				style: {
					fontSize: 18,
					fontWeight: "bold",
					color: Theme[mode].text
				},
			}}
			rightComponent={
				<Icon
					type="ionicon"
					name="cog-outline"
					onPress={() => navigation.navigate("Settings")}
					color={Theme[mode].text}
				/>	
			}
			backgroundColor={Theme[mode].background}
		/>
	)
};

export default AppHeader;
