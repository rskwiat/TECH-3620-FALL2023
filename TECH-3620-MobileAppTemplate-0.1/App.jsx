import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/base";

import Home from "./src/views/Home";
import Favorites from "./src/views/Favorites";
import Recipe from "./src/views/Recipe";
import Settings from "./src/views/Settings";

import { Provider } from "react-redux";
import { store } from "./src/redux/store";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

<<<<<<< Updated upstream
const CreateHomeScreenWithTabs = () => {
=======
const HomeScreenWithTabs = () => {
>>>>>>> Stashed changes
	return (
		<Tabs.Navigator screenOptions={{ headerShown: false }}>
			<Tabs.Screen
				name="HomeScreen"
				component={Home}
				options={{
					tabBarLabel: "Home",
<<<<<<< Updated upstream
					tabBarIcon: ({ color }) => {
						<Icon name="home-outline" type="ionicon" color={color} />
					}
				}}
			/>
			<Tabs.Screen name="Favorites" component={Favorites} />
=======
					tabBarIcon: ({ color }) => (
						<Icon
							name="home-outline"
							type="ionicon"
							color={color}
						/>
					)
				}}
			/>
			<Tabs.Screen 
				name="Favorites"
				component={Favorites}
				options={{
					tabBarIcon: ({ color }) => (
						<Icon
							name="heart"
							type="ionicon"
							color={color}
						/>
					)
				}}
			/>
>>>>>>> Stashed changes
		</Tabs.Navigator>
	);
}

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
<<<<<<< Updated upstream
				<Stack.Screen name="Home" component={CreateHomeScreenWithTabs} />
=======
				<Stack.Screen name="Home" component={HomeScreenWithTabs} />
>>>>>>> Stashed changes
				<Stack.Screen name="Recipe" component={Recipe} />
				<Stack.Screen name="Settings" component={Settings} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};
