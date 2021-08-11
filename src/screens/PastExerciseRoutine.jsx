import React, {useContext, useEffect, useState, useCallback} from 'react'
import {RefreshControl, StyleSheet, View, Text, FlatList, TouchableOpacity, Image} from 'react-native'
import {FAB, Portal, Provider, Title, configureFonts, DefaultTheme, Subheading, Divider, Button, Modal, Paragraph, IconButton, List} from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { Context as RunContext } from '../context/ExerciseContext';
import { SafeAreaView } from 'react-native-safe-area-context';


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const PastExerciseScreen = ({navigation}) => {
  const [stateForFab, setStateForFab] = useState({ open: false });

  const [name, setName] = useState('')
  const [exercises, setExercises] = useState(null)
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState('')

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20, height: 500, margin: 20, overFlow: 'hidden', borderRadius: 10};

  const getInfo = (item) => {
    setName(item.name)
    setExercises(item.exercises)
    showModal()
  }

  const onStateChange = ({ open }) => setStateForFab({ open });

  const { open } = stateForFab;

  const {state, fetchExercises, deleteExercise} = useContext(RunContext)

  const deleteTheExercise = (item) => {
    setId(item._id)
    deleteExercise({id})
    fetchExercises()
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
      fetchExercises()
    });
    return fetchTheRuns;
  }, [navigation]);
  

  return (
    <Provider theme={theme}>
      <Portal>
        <SafeAreaView style={styles.container}>
          <TouchableOpacity style={styles.iconButton}><Image source = {{uri: 'https://image.flaticon.com/icons/png/512/4072/4072133.png'}} style={{height: 200, width: 200}}/></TouchableOpacity>
          <Text></Text>
          <Text></Text>
          <Divider />
          <View style={{backgroundColor: '#30bfbf', margin: 2, padding: 5, alignItems: 'center'}}><Title style={{color: 'white', fontFamily: 'Grandstander-Black'}}>Past Exercises</Title></View>
          <FlatList
            data={state}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => {
              return (
                <View>
                  <View style={{flexDirection: 'row'}}>
                    {/* <IconButton onPress={() => {deleteTheExercise(item._id)}} icon="delete-outline"/> */}
                    <Button style={{marginVertical: 10, marginRight: 10, borderColor: '"#6200ee', borderWidth: 0.09, flex: 1,}} onPress={() => {getInfo(item)}}>{item.name} <Ionicons name="chevron-forward" size={15}/></Button>
                  </View>
                  <Divider />
                </View>
              )
            }}
            />
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <FlatList
            style={{height: 500}} 
            data={exercises}
            keyExtractor={(item) => item.key}
            renderItem = {({item}) => {
              return (
                <View>
                  <List.Item
                    title={item.exerciseName}
                    description={() => {
                      return(
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Subheading>Time: </Subheading>
                          <Paragraph>{item.minutes} min {item.seconds} sec</Paragraph>
                        </View>
                      )}}
                    left={props => <List.Icon {...props} icon={() => {
                      return(
                      <Image source = {{uri: item.icon}} style={{height: 50, width: 50, borderRadius: 50}}/>
                    )}} />}
                  />
                </View>
              )
            }}
          />
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

export default PastExerciseScreen