import React, {useState, useEffect} from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import {Button, Divider, TextInput} from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';


const ExerciseRoutineScreen = ({navigation}) => {
  const [image, setImage] = useState('https://lh3.googleusercontent.com/EbXw8rOdYxOGdXEFjgNP8lh-YAuUxwhOAe2jhrz3sgqvPeMac6a6tHvT35V6YMbyNvkZL4R_a2hcYBrtfUhLvhf-N2X3OB9cvH4uMw=w1064-v0')

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
      quality: 1000,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };



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
      />
      <View style={{flexDirection: 'row'}}>
        <TextInput
          style={{width: 185}}
          left={<TextInput.Icon onPress={pickImage} name={() => <Image source={{uri: image}} style={{height: 50, width: 50}}/>} />}
          label={'Name of routine'}
          mode=''
          theme={{
            roundness: 0,
            colors: {
              primary:'#30bfbf',
              underlineColor:'transparent',
            }
          }}
        />
        <View style={{flexDirection: 'column'}}>
          <Text>|</Text>
          <Text>|</Text>
          <Text>|</Text>
        </View>
        <TextInput
          style={{width: 60}}
          label={'Min'}
          mode=''
          theme={{
            roundness: 0,
            colors: {
              primary:'#30bfbf',
              underlineColor:'transparent',
            }
          }}
        />
        <View style={{flexDirection: 'column'}}>
          <Text>|</Text>
          <Text>|</Text>
          <Text>|</Text>
        </View>
        <TextInput
          style={{width: 90}}
          label={'Sec'}
          mode=''
          theme={{
            roundness: 0,
            colors: {
              primary:'#30bfbf',
              underlineColor:'transparent',
            }
          }}
          right={<TextInput.Icon onPress={() => console.log('preesseed')}name={() => <Ionicons name="add-circle" size={25} style={{color: '#00b35a'}}/>} />}
        />
        <View style={{flexDirection: 'column'}}>
          <Text>|</Text>
          <Text>|</Text>
          <Text>|</Text>
        </View>
      </View>
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