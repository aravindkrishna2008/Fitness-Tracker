import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Context as AuthContext} from '../context/AuthContext'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AccountScreen = ({navigation}) => {
  const { signout } = useContext(AuthContext)
  return (
    <View style={styles.container}>
      <SafeAreaView forceInset={{top: 'always'}}>
        <Text>Account Screen</Text>
          <Button title="Sign out" onPress={signout}/>
      </SafeAreaView>
    </View>
  );
}

AccountScreen.navigationOptions = {
  title: "Account",
  tabBarIcon: <MaterialCommunityIcons name="account" size={24} color='#17A7FF' />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default AccountScreen