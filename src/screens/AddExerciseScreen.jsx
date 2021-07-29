import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'

const AddExerciseScreen = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Text>AddExerciseScreen!</Text>
      <Text></Text>
      <Button title="Add a run" onPress={() => navigation.navigate("Walk")}/>
      <Text></Text>
      <Button title="Add a swim" onPress={() => navigation.navigate("Swim")}/>
      <Text></Text>
      <Button title="Add a exercise routine" onPress={() => navigation.navigate("ExerciseRoutine")}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default AddExerciseScreen