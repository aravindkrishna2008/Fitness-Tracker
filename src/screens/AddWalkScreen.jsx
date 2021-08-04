import React, {useState, useEffect} from 'react'
import {StyleSheet, View, Text, Image, ScrollView, Alert, Linking, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import {Button, TextInput, IconButton, Provider, Menu, Portal, Dialog, Paragraph} from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';


const WalkScreen = ({navigation}) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [350, 200],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const [dialogVisible, setDialogVisible] = React.useState(false);

  const showDialog = () => {
    setDialogVisible(true)
    setVisible(false)
  };

  const hideDialog = () => {
    setDialogVisible(false)
  };


  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);



  return(
    <Provider>
      <ScrollView style={styles.container}>
        <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={<Button dark mode="contained" color="#30bfbf" onPress={() => navigation.navigate('HomeFlow')} onLongPress={() => Alert.alert('hello')} onLongPress={() => openMenu()}>
            <Ionicons name="arrow-back-outline" size={20} />
            <Text>Back</Text>
            <Text>                                               </Text>
          </Button>}>
            <Menu.Item icon="arrow-left"onPress={() => navigation.navigate('HomeFlow')} title="Go to Home" />
            <Menu.Item icon={() => {return <Ionicons name="help" size={24} color="#787878"/>}}onPress={showDialog} title="Help" />
          </Menu>
        {image && <Image source={{ uri: image }} style={{ width: 350, height: 200, marginLeft: 5, marginTop: 10, borderRadius: 10}} />}
        <Button mode="contained" style={{margin: 10, backgroundColor: '#00a5a7'}}onPress={pickImage}>Pick an image from camera roll</Button>
      <Portal>
        <Dialog visible={dialogVisible} onDismiss={hideDialog}>
          <Dialog.Title>You requested for help</Dialog.Title>
          <Dialog.Content>
            <Paragraph>This page is for adding any of your runs or walks. Just fill in all the needed inforamation. For the image use any traking aplication of your choice and add a screen shot of your route. If you don't have any tracking locations, No worries! Click the link below that says "Click, To Track a Run". Just add your route, screenshot upload!!!</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => Linking.openURL('https://onthegomap.com/#/create')}>Click, to track a run</Button>
            <Button onPress={hideDialog}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
        <TextInput 
            style={{margin: 10}} 
            left={<TextInput.Icon name={() => <Ionicons name="walk-outline" size={25} />} />}
            label={'Name of run'}
            mode=''
            theme={{
              roundness: 0,
              colors: {
                primary:'#30bfbf',
                underlineColor:'transparent',
              }
            }}
          />
          <TextInput 
            multiline
            style={{margin: 10, height: 75}} 
            left={<TextInput.Icon name={() => <MaterialCommunityIcons name="format-letter-case" size={25} color="black"/>} />}
            label={'Description'}
            mode=''
            theme={{
              roundness: 0,
              colors: {
                primary:'#30bfbf',
                underlineColor:'transparent',
              }
            }}
          />
          <TextInput 
            style={{margin: 10 }} 
            left={<TextInput.Icon name={() => <MaterialCommunityIcons name="shoe-print" size={25} color="black"/>} />}
            label={'Distance'}
            mode=''
            theme={{
              roundness: 0,
              colors: {
                primary:'#30bfbf',
                underlineColor:'transparent',
              }
            }}
            right={<TextInput.Affix text="miles" />}
            keyboardType="numeric"
          />
      </ScrollView>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fcfd',
    marginTop: 25
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