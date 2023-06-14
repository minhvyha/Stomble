import { useEffect, useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { Stack, useRouter, Redirect } from 'expo-router';
import ScreenHeaderBtn from '../components/header/ScreenHeaderBtn';
import { icons,  } from '../constants';
export default function Home() {

  let [contactList, setContactList] = useState('')

  useEffect(() =>{
    
  }, [])

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  
 
  const jobTypes = ["Full-time", "Part-time", "Contractor"];
  return(
  <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
    <Stack.Screen
      options={{
        headerShadowVisible: false,
        headerTitle: '',
        headerLeft: () => (
          <Text style={{fontSize: 20, fontWeight: 'bold'}} >Contact</Text>
          ),
          headerRight: () => (
          <ScreenHeaderBtn iconUrl={icons.chevronDark} dimension="50%" />

        )
      }}
    />
    <View style={{width: 900, height: 300}}>
    <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <TouchableOpacity

            >
              <Text >{item.id}</Text>
            </TouchableOpacity>
          )}
          horizontal
        />
    </View>
  </SafeAreaView>
  )
}
