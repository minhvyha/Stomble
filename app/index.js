import { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import ScreenHeaderBtn from '../components/header/ScreenHeaderBtn';
import { icons } from '../constants';

function Home() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: '',
          // headerLeft: () => (
          //   <ScreenHeaderBtn iconUrl={icons.chevronLeft} dimension="60%" />
          // ),
          // headerRight: () =>{
          //   <ScreenHeaderBtn iconUrl={icons.profile} dimension="60%" />
          // }
        }}
      />
    </SafeAreaView>
  );
}

export default Home;
