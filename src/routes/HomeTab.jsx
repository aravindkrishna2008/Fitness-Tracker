import * as React from 'react';
import DashboardScreen from '../screens/DashboardScreen';
import AccountScreen from '../screens/AccountScreen';
import { Ionicons } from '@expo/vector-icons';
import FoodScreen from '../screens/FoodScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function Navigator() {
	return (
			<Tab.Navigator
				initialRouteName="Home"
				activeColor="#f0edf6"
				inactiveColor="white"
				barStyle={{ backgroundColor: '#30bfbf', margin: 10, fontFamily: 'Grandstander-Bold' }}
				labelStyle={{fontFamily: 'Grandstander-Bold'}}
				style={{fontFamily: 'Grandstander-Bold'}}
		
				initialRouteName="Home"
				lazy={false}
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						if (route.name === 'Home') {
							iconName = focused ? 'home' : 'home-outline';
							color = focused ? 'white' : 'black'
						} else if (route.name === 'Food') {
							iconName = focused ? 'fast-food' : 'fast-food-outline';
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
						fontFamily: 'Grandstander-Bold'
					},
					activeTintColor: 'white',
					inactiveTintColor: '#ffffff',
				}}>
				<Tab.Screen name="Home" component={DashboardScreen} tabBarColor="blue"/>
				<Tab.Screen name="Food" component={FoodScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
			</Tab.Navigator>
	);
}
