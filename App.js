import React, {useState, useEffect} from 'react';
import Navigator from './src/routes/Navigator'
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
import { Provider as RunProvider } from './src/context/AddWalkContext';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';


const fontConfig = {
  web: {
    regular: {
      fontFamily: 'Grandstander-Bold',
      fontWeight: 'normal',
    },
		regular: {
      fontFamily: 'Grandstander-Medium',
      fontWeight: 'normal',
    }
	},
  ios: {
    regular: {
      fontFamily: 'Grandstander-Bold',
      fontWeight: 'bold',
		},
		regular: {
      fontFamily: 'Grandstander-Medium',
      fontWeight: 'normal',
    }
	},
  android: {
    regular: {
      fontFamily: 'Grandstander-Bold',
      fontWeight: 'bold',
    },
		regular: {
      fontFamily: 'Grandstander-Medium',
      fontWeight: 'normal',
    }
  }
};

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
};

const App = () => {
  return (
		<>
			<Navigator />
		</>
  );
}

export default () => {
	const [fontsLoaded, setFontsLoaded] = useState(false);

	const loadFonts = async () => {
		await Font.loadAsync({
			'Grandstander-Black': require('./assets/fonts/Grandstander/static/Grandstander-Black.ttf'),
			'Grandstander-Bold': require('./assets/fonts/Grandstander/static/Grandstander-Bold.ttf'),
			'Grandstander-ExtraBold': require('./assets/fonts/Grandstander/static/Grandstander-ExtraBold.ttf'),
			'Grandstander-Medium': require('./assets/fonts/Grandstander/static/Grandstander-Medium.ttf'),
			'Grandstander-SemiBold': require('./assets/fonts/Grandstander/static/Grandstander-SemiBold.ttf'),
		});
		setFontsLoaded(true);
	};

	useEffect(() => {
		loadFonts();
	}, []);

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<PaperProvider theme={theme}>
			<RunProvider>
				<AuthProvider>
					<App />
				</AuthProvider>
			</RunProvider>
		</PaperProvider>
	)
}