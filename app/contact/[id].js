import { Stack, useRouter, useSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AntDesign } from '@expo/vector-icons';


import { Image } from 'expo-image';

import {images} from '../../constants'
function Edit(params) {
  return (
    <View>
      <Image style={{height: "100%", width: "100%"}} source={images.background} >
        <Text>{params.id}</Text>
         </Image>
    </View>
  )
}

const ContactDetail = () => {
  const params = useSearchParams()
  const router = useRouter()
const [searchResult, setSearchResult] = useState([]);
    const [searchLoader, setSearchLoader] = useState(false);
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerShadowVisible: true,
          headerTitle: '',
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()} >
              <AntDesign name="left" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
        
      />
      {/* <EditHero params={params} /> */}
    </SafeAreaView>
  )
}

export default ContactDetail