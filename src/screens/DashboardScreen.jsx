import React, {useContext} from 'react'
import {StyleSheet, View, Image } from 'react-native'
import { FAB, Modal, Button, Portal, Provider,  IconButton, Text, configureFonts, DefaultTheme, Title, Paragraph  } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Context } from '../context/AuthContext';
 
const fontConfig = { 
  web: {
    regular: {
      fontFamily: 'Grandstander-Black',
      fontWeight: 'normal',
    },
  },
  ios: {
    regular: {
      fontFamily: 'Grandstander-Medium',
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: 'Grandstander-Medium',
      fontWeight: 'normal',
    }
  }
};
 
const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
};
 
 
const DashboardScreen = ({navigation}) => {
  const [state, setState] = React.useState({ open: false });
 
  const {signout} = useContext(Context)
 
  const onStateChange = ({ open }) => setState({ open });
 
  const { open } = state;
 
  const [visible, setVisible] = React.useState(false);
 
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', margin: 10, borderRadius: 10, height: 400};
 
 
  return (
    <Provider theme={theme}>
      <Portal>
        <SafeAreaView style={styles.container}>
          <Title style={{fontFamily: 'Grandstander-Bold'}}>Welcome Home</Title>
          <Image source={{uri: 'https://wallpaperaccess.com/full/654874.jpg'}} style={{height: 180, width:315, borderRadius: 10, marginTop: 10}}/>
          <Title style={styles.title}>Welcome to fitlance 
         </Title>
         <Paragraph style={{margin:20}}>Welcome to fitlance, in this app you will be able to track your fitness and food diet. This will help people track their weight and help them loose it.This is also made from a not profit organization.The creators of this app know people don't like adds so we have no adds in our app. So enjoy fitlance and welome. This is written by the creators  </Paragraph>
         <View styles = {styles.buttoncontainer} >
         <Button mode="contained" onPress={() => navigation.navigate("Walk", {screen: 'Past Walks'})}>Go to past walk</Button>
         <Button mode="contained" onPress={() => navigation.navigate("ExerciseRoutine", {screen: 'Past Routines'})}>Go to past exersise</Button>
         </View>
          <View style={{position: 'absolute', alignSelf: 'flex-end', margin: 25, flexDirection: 'row'}}>
            <IconButton icon={() => <Ionicons name="log-out-outline" size={35}/>} onPress={showModal}/>
            <Text>  </Text>
          </View>
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
            <Ionicons name="log-out-outline" size={200} style={{alignSelf: 'center'}}/>
            <Title style={{margin: 10,fontFamily: 'Grandstander-Bold'}}>Are you sure you want to log out: </Title>
            <Button dark={true} mode="contained" style={{margin: 10, backgroundColor: '#33B3A6'}} onPress={() => {
              signout()
              hideModal()
            }}><Text style={{color: 'white',fontFamily: 'Grandstander-Black'}}>Yes</Text></Button>
            <Button dark={true} mode="contained" style={{margin: 10, backgroundColor: '#33B3A6'}} onPress={() => {
              hideModal()
            }}><Text style={{color: 'white',fontFamily: 'Grandstander-Black'}}>No</Text></Button>
          </Modal>
        </SafeAreaView>
        <FAB.Group
          style={{}}
          open={open}
          icon={open ? () => <Ionicons name="add-circle" size={25} color="#3A3b3C"/> : () => <Ionicons name="add-outline" size={25} color="#3A3b3C"/>}
          actions={[
            {
              icon: 'food',
              label: 'Add a meal',
              onPress: () => navigation.navigate('HomeFlow', { screen: 'Food', key: 1 })
            },
 
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
    // justifyContent: 'center',
    backgroundColor: 'white'
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  title: {
    marginTop: 10
 
  },
  buttoncontainer: {
    marginTop:10
  }
})
 
export default DashboardScreen
 
 
 
 

