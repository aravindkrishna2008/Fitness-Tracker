import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navigator from './src/routes/Navigator'

const Tab = createBottomTabNavigator();

const App = () => {
  return (
		<>
			<Navigator />
		</>
  );
}

export default App