import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Modal, Title } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Context as AuthContext} from '../context/AuthContext'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const AccountScreen = ({navigation}) => {
  const { signout } = useContext(AuthContext)

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', margin: 10, borderRadius: 10, height: 400};
  return (
    <View style={styles.container}>
      <SafeAreaView forceInset={{top: 'always'}}>
        <Title>Account Screen</Title>
          <Button onPress={showModal} dark style={{backgroundColor: '#30bfbf', margin: 10 }}mode="contained">Sign out</Button>
      </SafeAreaView>
      <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
            <Ionicons name="log-out-outline" size={200} style={{alignSelf: 'center'}}/>
            <Title style={{margin: 10}}>Are you sure you want to log out: </Title>
            <Button dark={true} mode="contained" style={{margin: 10, backgroundColor: '#33B3A6'}} onPress={() => {
              signout()
              hideModal()
            }}>Yes</Button>
            <Button dark={true} mode="contained" style={{margin: 10, backgroundColor: '#33B3A6'}} onPress={() => {
              hideModal()
            }}>No</Button>
          </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default AccountScreen