import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import TabBarIcon from '../components/TabBarIcon';
import SettingsScreen from '../screens/SettingsScreen';
import CodeReviewScreen from '../screens/CodeReviewScreen';
import Colors from '../constants/Colors';
import DevelopScreen from '../screens/DevelopScreen';
import FastlaneScreen from '../screens/FastlaneScreen';
import FixedScreen from '../screens/FixedScreen';
import TodDosScreen from '../screens/ToDosScreen';
import HomeScreen from '../screens/HomeScreen';

const HomeStack = createStackNavigator({
	Home: HomeScreen
});

HomeStack.navigationOptions = {
	tabBarLabel: 'Home',
	tabBarIcon : ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={
				Platform.OS === 'ios'
					? 'ios-home'
					: 'md-home'
			}
		/>
	)
};
const DevelopStack = createStackNavigator({
	Develop: DevelopScreen
});

DevelopStack.navigationOptions = {
	tabBarLabel: 'Develop',
	tabBarIcon : ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={
				Platform.OS === 'ios'
					? 'ios-code'
					: 'md-code'
			}
		/>
	)
};
const CodeReviewStack = createStackNavigator({
	CodeReview: CodeReviewScreen
});

CodeReviewStack.navigationOptions = {
	tabBarLabel: 'Review',
	tabBarIcon : ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={
				Platform.OS === 'ios'
					? `ios-search`
					: 'md-search'
			}
		/>
	)
};

const FixedStack = createStackNavigator({
	Fixed: FixedScreen
});
FixedStack.navigationOptions = {
	tabBarLabel: 'Fixed',
	tabBarIcon : ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={
				Platform.OS === 'ios'
					? `ios-checkmark-circle${focused ? '' : '-outline'}`
					: 'md-checkmark-circle'
			}
		/>
	)
};

const FastlaneStack = createStackNavigator({
	Fastlane: FastlaneScreen
});
FastlaneStack.navigationOptions = {
	tabBarLabel: 'Fastlane',
	tabBarIcon : ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={
				Platform.OS === 'ios'
					? 'ios-flame'
					: 'md-flame'
			}
		/>
	)
};
const TodoStack = createStackNavigator({
	ToDos: TodDosScreen
});

TodoStack.navigationOptions = {
	tabBarLabel: 'ToDos',
	tabBarIcon : ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? 'ios-list' : 'md-list'}
		/>
	)
};


const SettingsStack = createStackNavigator({
	Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
	tabBarLabel: 'Settings',
	tabBarIcon : ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
		/>
	)
};

export default createMaterialBottomTabNavigator({
		HomeStack,
		DevelopStack,
		CodeReviewStack,
		FixedStack,
		FastlaneStack,
		TodoStack,
		//SettingsStack
	},
	{
		initialRouteName: 'HomeStack',
		activeColor     : Colors.tabIconSelected,
		inactiveColor   : Colors.tabIconDefault,
		barStyle        : { backgroundColor: Colors.tabBar }
	});
