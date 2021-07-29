import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screens/DashboardScreen';
import AccountScreen from '../screens/AccountScreen';
import { Ionicons } from '@expo/vector-icons';
import AddExerciseScreen from '../screens/AddExerciseScreen';

const Tab = createBottomTabNavigator();

export default function Navigator() {
	return (
			<Tab.Navigator
				initialRouteName="Home"
				lazy={false}
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						if (route.name === 'Home') {
							iconName = focused ? 'home' : 'home-outline';
						} else if (route.name === 'Add') {
							iconName = focused ? 'add-circle' : 'add-circle-outline';
						} else if (route.name === 'Account') {
							iconName = focused ? 'person' : 'person-outline';
						}
						//@ts-ignore
						return <Ionicons name={iconName} size={size} color="white" />;
					},
				})}
				tabBarOptions={{
					style: {
						backgroundColor: '#1e56a9',
					},
					labelStyle: {
						// fontFamily: 'Roboto-Condensed-Bold'
					},
					activeTintColor: 'white',
					inactiveTintColor: '#ffffff',
				}}>
				<Tab.Screen name="Home" component={DashboardScreen} />
				<Tab.Screen name="Add" component={AddExerciseScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
			</Tab.Navigator>
	);
}
