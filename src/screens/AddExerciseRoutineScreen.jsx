import React, {useState, useEffect, useContext} from 'react'
import {StyleSheet, View, Text, Image, Alert, FlatList} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import {Button, IconButton, TextInput, List, Subheading, Paragraph} from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import { Context } from '../context/ExerciseContext';

const ExerciseRoutineScreen = ({navigation}) => {
  const [image, setImage] = useState('https://lh3.googleusercontent.com/EbXw8rOdYxOGdXEFjgNP8lh-YAuUxwhOAe2jhrz3sgqvPeMac6a6tHvT35V6YMbyNvkZL4R_a2hcYBrtfUhLvhf-N2X3OB9cvH4uMw=w1064-v0')
  const [exercises, setExercises] = useState([])
  const [nameOfExercise, setNameOfExecise] = useState('')
  const [minutes, setMinutes] = useState(null)
  const [seconds, setSeconds] = useState(null)
  const {createExercise, state, clearErrorMessage} = useContext(Context)
  const [name, setName] = useState('')

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
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const addToList = () => {
    if (image === 'https://lh3.googleusercontent.com/EbXw8rOdYxOGdXEFjgNP8lh-YAuUxwhOAe2jhrz3sgqvPeMac6a6tHvT35V6YMbyNvkZL4R_a2hcYBrtfUhLvhf-N2X3OB9cvH4uMw=w1064-v0') {
      setImage('https://image.flaticon.com/icons/png/512/2362/2362199.png')
  }
  if (image === 'https://image.flaticon.com/icons/png/512/4646/4646249.png') {
    setImage('https://image.flaticon.com/icons/png/512/2362/2362199.png')
  }
  if (image === 'https://image.flaticon.com/icons/png/512/2362/2362199.png') {
    setImage('https://image.flaticon.com/icons/png/512/2362/2362199.png')
  }
  if (image === 'https://image.flaticon.com/icons/png/512/2362/2362199.png') {
    setImage('https://image.flaticon.com/icons/png/512/4072/4072275.png')
  }
  if (image === 'https://image.flaticon.com/icons/png/512/4072/4072275.png') {
    setImage('https://image.flaticon.com/icons/png/512/2548/2548429.png')
  }
  if (image === 'https://image.flaticon.com/icons/png/512/2548/2548429.png') {
    setImage('https://image.flaticon.com/icons/png/512/5147/5147050.png')
  }
  if (image === 'https://image.flaticon.com/icons/png/512/5147/5147050.png') {
    setImage('https://image.flaticon.com/icons/png/512/2833/2833556.png')
  }
  if (image === 'https://image.flaticon.com/icons/png/512/2833/2833556.png') {
    setImage('https://image.flaticon.com/icons/png/512/4646/4646249.png')
  }
      const key = (Math.random()).toString()
      const response = {icon: image, exerciseName: nameOfExercise, minutes, seconds, key}
      setExercises([...exercises, response])
      console.log(exercises)
  }

  const deleteSomething = (id) => {
    console.log(id)
    const newExercises = exercises.filter((item) => item.key !== id);
    setExercises(newExercises);
  }



  return(
    <SafeAreaView style={styles.container}>
      <Button dark mode="contained" color="#30bfbf" onPress={() => navigation.navigate('HomeFlow')}>
        <Ionicons name="arrow-back-outline" size={20} />
        <Text>Back</Text>
        <Text>                                                  </Text>
      </Button>
      <TextInput
        style={{margin: 10}}
        left={<TextInput.Icon name={() => <Ionicons name="barbell-outline" size={25} />} />}
        label={'Name of routine'}
        mode=''
        theme={{
          roundness: 0,
          colors: {
            primary:'#30bfbf',
            underlineColor:'transparent',
          }
        }}
        value={name}
        onChangeText={setName}
      />
      <View style={{flexDirection: 'row', marginHorizontal: 10}}>
        <TextInput
          style={{width: 185}}
          left={<TextInput.Icon onPress={pickImage} name={() => <Image source={{uri: image}} style={{height: 50, width: 50}}/>} />}
          label={'Name of exercise'}
          mode=''
          theme={{
            roundness: 0,
            colors: {
              primary:'#30bfbf',
              underlineColor:'transparent',
            }
          }}
          value={nameOfExercise}
          onChangeText={setNameOfExecise}
        />
        <View style={{flexDirection: 'column'}}>
          <Text>|</Text>
          <Text>|</Text>
          <Text>|</Text>
        </View>
        <TextInput
          style={{width: 55}}
          label={'Min'}
          mode=''
          theme={{
            roundness: 0,
            colors: {
              primary:'#30bfbf',
              underlineColor:'transparent',
            }
          }}
          keyboardType="numeric"
          value={minutes}
          onChangeText={setMinutes}
        />
        <View style={{flexDirection: 'column'}}>
          <Text>|</Text>
          <Text>|</Text>
          <Text>|</Text>
        </View>
        <TextInput
          style={{width: 55}}
          label={'Sec'}
          mode=''
          theme={{
            roundness: 0,
            colors: {
              primary:'#30bfbf',
              underlineColor:'transparent',
            }
          }}
          keyboardType="numeric"
          value={seconds}
          onChangeText={setSeconds}
        />
        <View style={{flexDirection: 'column'}}>
          <Text>|</Text>
          <Text>|</Text>
          <Text>|</Text>
        </View>
        <IconButton style={{alignSelf: 'center'}} onPress={() => {addToList()}}icon="plus-circle" color="#00b35a"/>
        
      </View>
      <FlatList
          style={{height: 500}} 
          data={exercises}
          keyExtractor={(item) => item.key}
          renderItem = {({item}) => {
            return (
              <View>
                <List.Item
                  title={item.nameOfExercise}
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
                  right={props => <List.Icon {...props} icon={() => {
                    return(
                    //  <Image source = {{uri: item.image}} style={{height: 50, width: 50, borderRadius: 50}}/>
                    <IconButton onPress={() => deleteSomething(item.key)}icon="delete-outline" size={26}/>
                  )}} />}

                />
              </View>
            )
          }}
        />
        <Button onPress={() => {createExercise({name, exercises})}}color="#30bfbf" style={{margin: 10}}dark mode="contained" icon='upload'>Upload</Button>
        {state.errorMessage ? (
            <Text style={{color: "#ff0f0f", alignSelf: 'center', fontWeight: 'bold'}}>{state.errorMessage}</Text>
          ) : null}

    </SafeAreaView>
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

export default ExerciseRoutineScreen