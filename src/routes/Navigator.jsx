import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import HomeTab from './HomeTab'
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from '../screens/SignupScreen';
import SwimScreen from '../screens/SwimScreen';
import ExerciseRoutineScreen from '../screens/ExerciseRoutineScreen';
import WalkScreen from '../screens/WalkScreen';
import SigninScreen from '../screens/SigninScreen';

const Stack = createStackNavigator();


export default function Navigator() {
	return (
		<NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="signup" component={SignupScreen}/>
        <Stack.Screen name="HomeFlow" component={HomeTab}/>
        <Stack.Screen name="Swim" component={SwimScreen}/>
        <Stack.Screen name="Walk" component={WalkScreen}/>
        <Stack.Screen name="ExerciseRoutine" component={ExerciseRoutineScreen}/>
        <Stack.Screen name="Signin" component={SigninScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
	);
}