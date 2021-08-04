import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'
import { Title } from 'react-native-paper'

const FoodScreen = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Title>Welcome to the food screen</Title>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
})

export default FoodScreen