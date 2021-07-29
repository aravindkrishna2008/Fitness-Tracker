import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const WalkScreen = ({navigation}) => {
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Add')}>
        <Ionicons name="arrow-back-outline" size={35} />
        <Text style={{fontSize: 25}}>Back</Text>
      </TouchableOpacity>
      <Text>WalkScreen!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    flexDirection: 'row',
    margin: 40,
    alignSelf: 'flex-start',
    justifyContent: 'center',
  }
})

export default WalkScreen