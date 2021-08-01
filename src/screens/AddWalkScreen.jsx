import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import {Button} from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context';


const WalkScreen = ({navigation}) => {
  return(
    <SafeAreaView style={styles.container}>
      <Button dark mode="contained" color="#30bfbf" onPress={() => navigation.navigate('HomeFlow')}>
        <Ionicons name="arrow-back-outline" size={20} />
        <Text>Back</Text>
        <Text>                                                  </Text>
      </Button>
      <Text>WalkScreen!</Text>
    </SafeAreaView>
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
    backgroundColor: "#30bfbf"
  }
})

export default WalkScreen