import { Header, Icon } from "@rneui/base";

const AppHeader = ({ navigation }) => {
	return (
		<Header
			leftComponent={
				<Icon
					type="ionicon"
					name="people-sharp"
					onPress={() => console.log("profile")}
				/>
			}
			placement="left"
			centerComponent={{
				text: "Broke Foodie",
				style: {
					fontSize: 18,
					fontWeight: "bold"
				},
			}}
			rightComponent={
				<Icon
					type="ionicon"
					name="cog-outline"
					onPress={() => navigation.navigate("Settings")}
				/>	
			}
			backgroundColor="#999"
		/>
	)
};

export default AppHeader;
