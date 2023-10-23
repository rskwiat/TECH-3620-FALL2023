import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/base";

import Home from "./src/views/Home";
import Favorites from "./src/views/Favorites";
import Recipe from "./src/views/Recipe";
import Settings from "./src/views/Settings";
import { store } from "./src/redux/store";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const HomeScreen = () => {
	return (
		<Tabs.Navigator
			screenOptions={{ headerShown: false }}
			initialRouteName="Home"
		>
			<Tabs.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Icon name="home-outline" type="ionicon" size={size} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="Favorites"
				component={Favorites}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Icon name="heart-outline" type="ionicon" size={size} color={color} />
					),
				}}
			/>
		</Tabs.Navigator>
	);
}

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="HomeScreen" component={HomeScreen} />
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
}
