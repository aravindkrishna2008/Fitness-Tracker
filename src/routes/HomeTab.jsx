import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screens/DashboardScreen';
import AccountScreen from '../screens/AccountScreen';
import { Ionicons } from '@expo/vector-icons';
import AddExerciseScreen from '../screens/AddExerciseScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function Navigator() {
	return (
			<Tab.Navigator
				initialRouteName="Home"
				activeColor="#f0edf6"
				inactiveColor="white"
				barStyle={{ backgroundColor: '#30bfbf' }}
		
				initialRouteName="Home"
				lazy={false}
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						if (route.name === 'Home') {
							iconName = focused ? 'home' : 'home-outline';
							color = focused ? 'white' : 'black'
						} else if (route.name === 'Add') {
							iconName = focused ? 'add-circle' : 'add-circle-outline';
							color = focused ? 'white' : 'black'
						} else if (route.name === 'Account') {
							iconName = focused ? 'person' : 'person-outline';
							color = focused ? 'white' : 'black'
						}
						//@ts-ignore
						return <Ionicons name={iconName} size={22} color='white' />;
					},
				})}
				tabBarOptions={{
					style: {
						backgroundColor: '#30bfbf',
					},
					labelStyle: {
						// fontFamily: 'Roboto-Condensed-Bold'
					},
					activeTintColor: 'white',
					inactiveTintColor: '#ffffff',
				}}>
				<Tab.Screen name="Home" component={DashboardScreen} tabBarColor="blue"/>
				<Tab.Screen name="Add" component={AddExerciseScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
			</Tab.Navigator>
	);
}
