import * as React from 'react';
import Navigator from './src/routes/Navigator'
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';

const App = () => {
  return (
		<>
			<Navigator />
		</>
  );
}

export default () => {
	return (
		<AuthProvider>
			<App />
		</AuthProvider>
	)
}