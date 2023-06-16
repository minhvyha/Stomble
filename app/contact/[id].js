import { Stack, useRouter, useSearchParams } from 'expo-router';
import { useCallback, useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Footer from '../../components/body/Footer';
import { AntDesign } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { images } from '../../constants';

const ContactDetail = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchLoader, setSearchLoader] = useState(false);
  const params = useSearchParams();
  const router = useRouter();

  const getContactDetail = async () => {
    setSearchLoader(true);
    let response = await fetch(
      `http://13.211.126.106:3012/u9clgWg4OzQBwLNp/${params.id}`
    );
    let json = await response.json();
    setSearchResult(json);
    setSearchLoader(false);
  };
  useEffect(() => {
    getContactDetail();
  }, []);

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerShadowVisible: true,
          headerTitle: '',
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <AntDesign name="left" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <View>
        <Image
          style={{ height: '100%', width: '100%' }}
          source={images.background}
        >
          <View
            style={{ display: 'flex', alignItems: 'center', marginTop: 100 }}
          >
            <Image
              style={{
                width: 120,
                height: 120,
                borderRadius: 60,
              }}
              source={{
                uri: `https://api.dicebear.com/6.x/micah/png?seed=${searchResult.firstName} ${searchResult.lastname}&facialHair[]&hair=dannyPhantom,full,pixie,turban,fonze&hairColor=000000,77311d,ac6651,f4d150,fc909f&mouth=laughing,nervous,pucker,smile,smirk,surprised&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`,
              }}
            />
            {searchLoader && <ActivityIndicator size="large" />}
            <View
              style={{
                height: '100%',
                backgroundColor: 'white',
                width: '100%',
                marginTop: -25,
                zIndex:-1
              }}
            >
              <Text>{searchResult.key}</Text>
            </View>
          </View>
        </Image>
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default ContactDetail;
