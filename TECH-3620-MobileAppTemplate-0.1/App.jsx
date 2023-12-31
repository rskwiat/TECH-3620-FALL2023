import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "./src/redux/reducers/settingsReducer";
import { Theme } from "./src/utils/constants";

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

const CreateHomeScreenWithTabs = () => {
	const { mode } = useSelector((state) => state.settings);
	
	return (
		<Tabs.Navigator 
			screenOptions={{ 
				headerShown: false,
				tabBarStyle: {
					backgroundColor: Theme[mode].background,
				}	
			}}>
			<Tabs.Screen
				name="HomeScreen"
				component={Home}
				options={{
					tabBarLabel: "Home",
					tabBarIcon: ({ color }) => {
						return <Icon name="home-outline" type="ionicon" color={color} />
					}
				}}
			/>
			<Tabs.Screen
				name="Favorites"
				component={Favorites}
				options={{
					tabBarLabel: "Favorite Recipes",
					tabBarIcon: ({ color }) => {
						return <Icon name="heart-outline" type="ionicon" color={color} />
					}
				}}				
			/>
		</Tabs.Navigator>
	);
}

const App = () => {
	const mode = useColorScheme();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setTheme(mode));
	}, []);

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Home" component={CreateHomeScreenWithTabs} />
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
						