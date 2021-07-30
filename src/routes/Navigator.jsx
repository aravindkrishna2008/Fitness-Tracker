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
import { Context as AuthContext } from '../context/AuthContext';
import DashboardScreen from '../screens/DashboardScreen';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator()

const walkNavigator = () => {
  <Tab.Navigator>
    <Tab.Screen name="Home" component={DashboardScreen} tabBarColor="blue"/>
    <Tab.Screen name="Walk" component={WalkScreen} tabBarColor="blue"/>
  </Tab.Navigator>
}

export default function Navigator() {
  const {state, clearErrorMessage} = useContext(AuthContext)
	return (
		<NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="ResolveAuth" component={ResolveAuthScreen} />
        <Stack.Screen name="signup" component={SignupScreen}/>
        <Stack.Screen name="HomeFlow" component={HomeTab}/>
        <Stack.Screen name="Swim" component={SwimScreen}/>
        <Stack.Screen name="Walk" component={WalkScreen}/>
        <Stack.Screen name="ExerciseRoutine" component={ExerciseRoutineScreen} />
      </Stack.Navigator>
    </NavigationContainer>
	);
}