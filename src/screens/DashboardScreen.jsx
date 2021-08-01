import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import { FAB, Portal, Provider, Title } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';


const DashboardScreen = ({navigation}) => {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
    <Provider>
      <Portal>
        <View style={styles.container}>
          <Title>Welcome Home</Title>
        </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})

export default DashboardScreen