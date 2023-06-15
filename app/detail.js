import { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Stack, useRouter, Redirect } from 'expo-router';
import ScreenHeaderBtn from '../components/header/ScreenHeaderBtn';
import { icons } from '../constants';
export default function Home() {
  let [contactList, setContactList] = useState([]);
  const getArticlesFromApi = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();
    setContactList(json);
  };
  getArticlesFromApi();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: '',
          headerLeft: () => (
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Contact</Text>
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.chevronDark} dimension="50%" />
          ),
        }}
      />
      <View style={{ flex: 1, display: 'flex', flexWrap: true }}>
        <FlatList
          data={contactList}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Text style={{  marginVertical: 8,
    marginHorizontal: 16, }}>{item.title}</Text>
            </TouchableOpacity>
          )}
          horizontal
        />
      </View>
    </SafeAreaView>
  );
}
