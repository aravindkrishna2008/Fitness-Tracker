import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const SwimScreen = ({navigation}) => {
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Add')}>
        <Text>  </Text>
        <Ionicons name="arrow-back-outline" size={35} />
        <Text style={{fontSize: 25}}>Back</Text>
      </TouchableOpacity>
      <Text>Home!</Text>
    </View>
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

export default SwimScreen