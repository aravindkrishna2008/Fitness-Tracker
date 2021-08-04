import React, {useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import HomeTab from './HomeTab'
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import SignupScreen from '../screens/SignupScreen';
import SwimScreen from '../screens/AddSwimScreen';
import ExerciseRoutineScreen from '../screens/AddExerciseRoutineScreen';
import WalkScreen from '../screens/AddWalkScreen';
import SigninScreen from '../screens/SigninScreen';
import { navigationRef } from '../RootNavigation';
import ResolveAuthScreen from '../screens/ResolveAuthScreen';
import PastExerciseScreen from '../screens/PastExerciseRoutine';
import PastWalkScreen from '../screens/PastWalkScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator()

const exerciseNavigator = () => {
  return (
    <Tab.Navigator
    activeColor="#f0edf6"
    inactiveColor="white"
    barStyle={{ backgroundColor: '#30bfbf', margin: 10 }}

    initialRouteName="Home"
    lazy={false}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Past Routines') {
          iconName = focused ? 'clipboard' : 'clipboard-outline';
          color = focused ? 'white' : 'black'
        } else if (route.name === 'Add a Routine') {
          iconName = focused ? 'add-circle' : 'add-circle-outline';
          color = focused ? 'white' : 'black'
        }
        return <Ionicons name={iconName} size={22} color='white' />;
      },
    })}
    >
      <Tab.Screen name="Add a Routine" component={ExerciseRoutineScreen}/>
      <Tab.Screen name="Past Routines" component={PastExerciseScreen} />
    </Tab.Navigator>
  )
}

const walkNavigator = () => {
  return (
    <Tab.Navigator
    activeColor="#f0edf6"
    inactiveColor="white"
    barStyle={{ backgroundColor: '#30bfbf', margin: 10, borderRadius: 20}}

    initialRouteName="Home"
    lazy={false}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Past Walks') {
          iconName = focused ? 'clipboard' : 'clipboard-outline';
          color = focused ? 'white' : 'black'
        } else if (route.name === 'Add a Run') {
          iconName = focused ? 'add-circle' : 'add-circle-outline';
          color = focused ? 'white' : 'black'
        }
        return <Ionicons name={iconName} size={22} color='white' />;
      },
    })}
    >
      <Tab.Screen name="Add a Run" component={WalkScreen}/>
      <Tab.Screen name="Past Walks" component={PastWalkScreen} />
    </Tab.Navigator>
  )
}

export default function Navigator() {

	return (
		<NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="ResolveAuth" component={ResolveAuthScreen} />
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="signup" component={SignupScreen}/>
        <Stack.Screen name="HomeFlow" component={HomeTab}/>
        <Stack.Screen name="Swim" component={SwimScreen}/>
        <Stack.Screen name="Walk" component={walkNavigator}/>
        <Stack.Screen name="ExerciseRoutine" component={exerciseNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
	);
}