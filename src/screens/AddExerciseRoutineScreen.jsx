import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import {Button} from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context';


const ExerciseRoutineScreen = ({navigation}) => {
  return(
    <SafeAreaView style={styles.container}>
      <Button dark mode="contained" color="#30bfbf" onPress={() => navigation.navigate('Add')}>
        <Ionicons name="arrow-back-outline" size={20} />
        <Text>Back</Text>
        <Text>                                                  </Text>
      </Button>
      <Text>Exercise Routine Screen!</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    flexDirection: 'row',
    marginTop: 40,
    alignSelf: 'flex-start',
    justifyContent: 'center',
  }
})

export default ExerciseRoutineScreen