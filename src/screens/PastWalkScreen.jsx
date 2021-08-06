import React, {useContext, useEffect, useState, useCallback} from 'react'
import {RefreshControl, StyleSheet, View, Text, FlatList, TouchableOpacity, Image} from 'react-native'
import {FAB, Portal, Provider, Title, configureFonts, DefaultTheme, Subheading, Divider, Button, Modal, Paragraph, IconButton} from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { Context as RunContext } from '../context/AddWalkContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import RNRestart from 'react-native-restart';


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const PastWalkScreen = ({navigation}) => {
  const [stateForFab, setStateForFab] = useState({ open: false });

  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [name, setName] = useState('')
  const [datePublished, setDatePublished] = useState('')
  const [visible, setVisible] = useState(false);
  const [distance, setDistance] = useState('')
  const [id, setId] = useState('')

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20, height: 500, margin: 20, overFlow: 'hidden', borderRadius: 10};

  const getInfo = (item) => {
    setImage(item.imageUris)
    setDescription(item.description)
    setName(item.name)
    // setName(name.toUpperCase())  
    setDatePublished(item.datePublished)
    setDistance(item.distance)
    showModal()
  }

  const onStateChange = ({ open }) => setStateForFab({ open });

  const { open } = stateForFab;

  const {state, fetchRuns, deleteRun} = useContext(RunContext)

  const deleteTheRun = (item) => {
    setId(item._id)
    deleteRun({id})
    fetchRuns()


  }

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

  useEffect(() => {
    const fetchTheRuns = navigation.addListener('focus', () => {
      fetchRuns()
    });
    return fetchTheRuns;
  }, [navigation]);
  

  return (
    <Provider theme={theme}>
      <Portal>
        <SafeAreaView style={styles.container}>
          <TouchableOpacity style={styles.iconButton}><MaterialIcons name="directions-run" size={200} color="#00a5a7" /></TouchableOpacity>
          <Text></Text>
          <Text></Text>
          <Divider />
          <View style={{backgroundColor: '#30bfbf', margin: 2, padding: 5, alignItems: 'center'}}><Title style={{color: 'white', fontFamily: 'Grandstander-Black'}}>Past Runs</Title></View>
          <FlatList
            data={state}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => {
              return (
                <View>
                  <View style={{flexDirection: 'row'}}>
                    <IconButton onPress={() => {deleteTheRun(item)}} icon="delete-outline"/>
                    <Button style={{marginVertical: 10, marginRight: 10, borderColor: '"#6200ee', borderWidth: 0.09, flex: 1,}} onPress={() => {getInfo(item)}}>{item.name} <Ionicons name="chevron-forward" size={15}/></Button>
                  </View>
                  <Divider />
                </View>
              )
            }}
            />
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Title style={{fontFamily: 'Grandstander-Black', color: 'black'}}>{name}</Title>
          <Image source={{uri: image}} style={{height: 160, width: 280, borderRadius: 15, marginTop: 15}}/>
          <Text></Text>
          <Text><Subheading style={{fontFamily: 'Grandstander-Bold'}}>Description: </Subheading><Paragraph>{description}</Paragraph></Text>
          <Text><Subheading style={{fontFamily: 'Grandstander-Bold'}}>Steps: </Subheading><Paragraph>{distance * 2000} steps</Paragraph></Text>
          <Text><Subheading style={{fontFamily: 'Grandstander-Bold'}}>Published: </Subheading><Paragraph>{datePublished}</Paragraph></Text>
          <Button mode="contained" style={{backgroundColor: '#00a5a7', borderRadius: 10, marginHorizontal: 50, marginTop: 10}} onPress={hideModal}>
            <Ionicons name="chevron-back-outline" size={15}/>
            Back
          </Button>
        </Modal>

        </SafeAreaView>
        <FAB.Group
          style={{marginBottom:0}}
          open={open}
          icon={open ? () => <Ionicons name="add-circle" size={25} color="#3A3b3C"/> : () => <Ionicons name="add-outline" size={25} color="#3A3b3C"/>}
          actions={[
            { icon: 'home', onPress: () => navigation.navigate('HomeFlow') },
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
    backgroundColor: 'white'
  },
  iconButton: {
    borderWidth: 3, 
    height: 300, 
    width: 300, 
    borderRadius: 300, 
    alignSelf: 'center', 
    alignItems: 'center', 
    justifyContent: 'center',
    borderStyle: 'dotted',
    borderColor: '#30bfbf',
    marginTop: 10
    
  }
})

export default PastWalkScreen