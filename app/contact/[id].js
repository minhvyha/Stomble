import { Stack, useRouter, useSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  TextInput,
} from "react-native";
import FastImage from 'react-native-fast-image'

import {images} from '../../constants'
function EditHero() {
  return (
    <View>
      <FastImage style={{height: "100%", width: "100%"}} source={images.background} />
    </View>
  )
}

const ContactDetail = () => {
  const params = useSearchParams()
  const router = useRouter()

  return (
    <SafeAreaView>
      <EditHero />
      <Text>adsf</Text>
    </SafeAreaView>
  )
}

export default ContactDetail