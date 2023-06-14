import { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter, Redirect } from 'expo-router';
import ScreenHeaderBtn from '../components/header/ScreenHeaderBtn';
import { icons } from '../constants';
export default function Home() {
  return(
  <SafeAreaView style={{ flex: 1 }}>
    <Stack.Screen
      options={{
        headerShadowVisible: false,
        headerTitle: '',
        headerLeft: () => (
          <ScreenHeaderBtn iconUrl={icons.chevronDark} dimension="50%" />
        ),
        headerRight: () => {
        },
      }}
    />
    <Text>als345dfj</Text>
  </SafeAreaView>
  )
}
