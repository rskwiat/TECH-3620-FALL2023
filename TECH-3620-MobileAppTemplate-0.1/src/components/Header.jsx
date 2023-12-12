
import React, { useRef, useState } from 'react';
import { Animated, StyleSheet, View, Dimensions, TouchableOpacity } from "react-native";
import { Button, Header, Icon, Text, Avatar } from "@rneui/base";
import { useSelector } from "react-redux";
import { Theme } from "../utils/constants";

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

const AppHeader = ({ navigation }) => {
	const [overlay, showOverlay] = useState(false);
	const { mode } = useSelector((state) => state.settings);
	const offScreenValue = -300;
	const startValue = useRef(new Animated.Value(offScreenValue)).current;
	const endValue = 0;
	const duration = 275;

	const onOpen = () => {
		Animated.timing(startValue, {
			toValue: endValue,
			duration: duration,
			useNativeDriver: true,
		}).start();
		showOverlay(true);
	}

	const onClose = () => {
		Animated.timing(startValue, {
			toValue: offScreenValue,
			duration: duration,
			useNativeDriver: true,
		}).start();
		showOverlay(false);
	}

	const navigateTo = (route) => {
		onClose();
		navigation.navigate(route);
	}

	return (
		<>
			<Header
				leftComponent={
					<Icon
						type="ionicon"
						name="people-sharp"
						onPress={onOpen}
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
				style={{ position: "relative" }}
			/>
			<Animated.View
				style={[
				styles.drawer,
					{
					transform: [{
						translateX: startValue,
					}],
					},
				]}
			>
				<View style={styles.innerDrawer}>
					<View style={styles.avatarWrapper}>
						<Avatar
							size={96}
							rounded
							source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
						/>
						<Text style={styles.avatarWrapperText}>User Name</Text>
					</View>
					<Button buttonStyle={styles.drawerButtons} title="Home" onPress={() => navigateTo("HomeScreen")} />
					<Button buttonStyle={styles.drawerButtons} title="Favorites" onPress={() => navigateTo("Favorites")} />
					<Button buttonStyle={styles.drawerButtons} title="Logout" onPress={onClose} />
				</View>

			</Animated.View>
			<TouchableOpacity
				style={[styles.background, {
					display: overlay ? "block" : "none",
				}]}
				onPress={onClose}>
			</TouchableOpacity>
		</>
	);
};

const styles = StyleSheet.create({
	background: {
		position: "absolute",
		top: 0,
		right: 0,
		height: ScreenHeight,
		backgroundColor: "rgba(0,0,0,.3)",
		zIndex: 1,
		width: ScreenWidth,
	},
	drawer: {
		position: "absolute",
		flex: 1,
		top: 0,
		left: 0,
		zIndex: 5,
		width: 300,
		height: ScreenHeight,
		backgroundColor: "#eee",
	},
	innerDrawer: {
		flex: 1,
		paddingHorizontal: 20,
		flexDirection: "column",
		justifyContent: "center",
		width: "100%",
	},
	avatarWrapper: {
		alignItems: "center",
		marginBottom: 80
	},
	avatarWrapperText: {
		fontSize: 16,
		fontWeight: "bold",
		marginTop: 10,
	},
	drawerButtons: {
		marginBottom: 20,
	}
});

export default AppHeader;
