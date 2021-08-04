import React, {useContext, useEffect} from 'react'
import {StyleSheet, View, Text, FlatList, ScrollView} from 'react-native'
import { FAB, Portal, Provider, Title, configureFonts, DefaultTheme, Subheading, Divider, Button} from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { Context as RunContext } from '../context/AddWalkContext';
import { SafeAreaView } from 'react-native-safe-area-context';


const PastWalkScreen = ({navigation}) => {
  const [stateForFab, setStateForFab] = React.useState({ open: false });

  const onStateChange = ({ open }) => setStateForFab({ open });

  const { open } = stateForFab;

  const {state, fetchRuns} = useContext(RunContext)

  const fontConfig = {
    web: {
      regular: {
        fontFamily: 'Grandstander-Black',
        fontWeight: 'normal',
      },
    },
    ios: {
      regular: {
        fontFamily: 'Grandstander-Medium',
        fontWeight: 'normal',
      },
    },
    android: {
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

  useEffect(() => {
    const fetchTheRuns = navigation.addListener('focus', () => {
      fetchRuns()
    });
  
    return fetchTheRuns;
  }, [navigation]);
  

  return (
    <Provider theme={theme}>
      <Portal>
        <SafeAreaView style={styles.container}>
          <Title>Welcome to Past Run screen</Title>
          <FlatList
            data={state}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => {
              return (
                <View>
                  <Button style={{margin: 10, borderColor: '"#6200ee', borderWidth: 0.09}} onPress={() => console.log('Pressed')}>{item.name} <Ionicons name="chevron-forward" size={15}/></Button>
                  <Divider />
                </View>
              )
            }}
            />
        </SafeAreaView>
        <FAB.Group
          open={open}
          icon={open ? () => <Ionicons name="add-circle" size={25} color="#3A3b3C"/> : () => <Ionicons name="add-outline" size={25} color="#3A3b3C"/>}
          actions={[
            { icon: 'home', onPress: () => navigation.navigate('HomeFlow') },
            {
              icon: 'weight-lifter',
              label: 'Add an exercise routine',
              onPress: () => navigation.navigate('ExerciseRoutine'),
            },
            {
              icon: 'walk',
              label: 'Add a walk or a run',
              onPress: () => navigation.navigate('Walk'),
              small: false,
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default PastWalkScreen