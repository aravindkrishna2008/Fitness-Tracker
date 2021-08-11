import React, {useState, useEffect, useContext} from 'react'
import {StyleSheet, View, Text, Image, Alert, FlatList} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import {Button, IconButton, TextInput, List, Subheading, Paragraph} from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import { Context } from '../context/FoodContext';
 
const FoodScreen = ({navigation}) => {
  const [image, setImage] = useState('https://image.flaticon.com/icons/png/512/5273/5273472.png')
  const [exercises, setExercises] = useState([])
  const [name, setNameOfExecise] = useState(null)
  const [calories, setCalories] = useState(null)
  const [meal, setMeal] = useState(null)
  const {state, fetchFood, createFood, deleteFood} = useContext(Context)
 
  useEffect(() => {
    const fetchTheFoods = navigation.addListener('focus', () => {
      fetchFood()
    });
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();

    return fetchTheFoods
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
    if (image === 'https://image.flaticon.com/icons/png/512/5273/5273472.png') {
      setImage('https://image.flaticon.com/icons/png/512/4192/4192361.png')
  }
    if (image === 'https://image.flaticon.com/icons/png/512/4192/4192361.png') {
      setImage('https://image.flaticon.com/icons/png/512/5318/5318728.png')
  }
  if (image === 'https://image.flaticon.com/icons/png/512/5318/5318728.png') {
    setImage('https://image.flaticon.com/icons/png/512/926/926292.png')
  }
  if (image === 'https://image.flaticon.com/icons/png/512/926/926292.png') {
    setImage('https://image.flaticon.com/icons/png/512/3946/3946536.png')
  }
  if (image === 'https://image.flaticon.com/icons/png/512/3946/3946536.png') {
    setImage('https://image.flaticon.com/icons/png/512/3014/3014470.png')
  }
  if (image === 'https://image.flaticon.com/icons/png/512/3014/3014470.png') {
    setImage('https://image.flaticon.com/icons/png/512/5346/5346138.png')
  }
  if (image === 'https://image.flaticon.com/icons/png/512/5346/5346138.png') {
    setImage('https://image.flaticon.com/icons/png/512/4729/4729975.png')
  }
  if (image === 'https://image.flaticon.com/icons/png/512/4729/4729975.png') {
    setImage('https://image.flaticon.com/icons/png/512/5318/5318636.png')
  }
  if (image === 'https://image.flaticon.com/icons/png/512/5318/5318636.png') {
    setImage('https://image.flaticon.com/icons/png/512/4192/4192361.png')
  }
    const key = (Math.random()).toString()
    const response = {image,name, calories, meal, key}
    createFood(response)
    setExercises([...exercises, response])
    setCalories(null)
    setNameOfExecise(null)
    setMeal(null)
    fetchFood()

  }
 
  const deleteSomething = (id) => {
    deleteFood(id)
  }
 
 
 
  return(
    <SafeAreaView style={styles.container}>
      <Button dark mode="contained" color="#30bfbf" onPress={() => navigation.navigate('HomeFlow')}>
        <Ionicons name="arrow-back-outline" size={20} />
        <Text>Back</Text>
        <Text>                                                  </Text>
      </Button>
 
      <View style={{flexDirection: 'row', marginHorizontal: 10}}>
        <TextInput
          style={{width: 170}}
          left={<TextInput.Icon onPress={pickImage} name={() => <Image source={{uri: image}} style={{height: 50, width: 50}}/>} />}
          label={'Name of food'}
          mode=''
          theme={{
            roundness: 0,
            colors: {
              primary:'#30bfbf',
              underlineColor:'transparent',
            }
          }}
          value={name}
          onChangeText={setNameOfExecise}
        />
        <View style={{flexDirection: 'column'}}>
          <Text>|</Text>
          <Text>|</Text>
          <Text>|</Text>
        </View>
        <TextInput
          style={{width: 75}}
          label={'Calories'}
          mode=''
          theme={{
            roundness: 0,
            colors: {
              primary:'#30bfbf',
              underlineColor:'transparent',
            }
          }}
          keyboardType="numeric"
          value={calories}
          onChangeText={setCalories}
        />
        <View style={{flexDirection: 'column'}}>
          <Text>|</Text>
          <Text>|</Text>
          <Text>|</Text>
        </View>
        <TextInput
          style={{width: 70}}
          label={'meal'}
          mode=''
          theme={{
            roundness: 0,
            colors: {
              primary:'#30bfbf',
              underlineColor:'transparent',
            }
          }}
          value={meal}
          onChangeText={setMeal}
        />
        <View style={{flexDirection: 'column'}}>
          <Text>|</Text>
          <Text>|</Text>
          <Text>|</Text>
        </View>
        <IconButton style={{alignSelf: 'center', marginLeft: 322, position: 'absolute'}} onPress={() => {addToList()}}icon="plus-circle" color="#00b35a" size={20}/>
        
      </View>
      <FlatList 
          data={state.reverse()}
          keyExtractor={(item) => item.id}
          renderItem = {({item}) => {
            return (
              <View>
                <List.Item
                  title={item.name}
                  description={() => {
                    return(
                      <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Paragraph>{item.calories} Calories, {item.meal}</Paragraph>
                      </View>
                    )}}
                  left={props => <List.Icon {...props} icon={() => {
                    return(
                     <Image source = {{uri: item.image}} style={{height: 50, width: 50, borderRadius: 50}}/>
                  )}} />}
                  // right={props => <List.Icon {...props} icon={() => {
                  //   return(
                  //   //  <Image source = {{uri: item.image}} style={{height: 50, width: 50, borderRadius: 50}}/>
                  //   // <IconButton onPress={() => deleteSomething(item.id)}icon="delete-outline" size={26}/>
                  // )}} />}
 
                />
 
              </View>
            )
          }}
        />
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
 
export default FoodScreen
 


