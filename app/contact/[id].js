import { Stack, useRouter, useSearchParams } from 'expo-router';
import {  useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { images } from '../../constants';

const ContactDetail = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchLoader, setSearchLoader] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [error, setError] = useState('')
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  const params = useSearchParams();
  const router = useRouter();

  function checkError(){
    if(firstName === '' || lastName === '' || phone === ''){
      setError('* Please fill out all of the box.')
      return true
    }
  }

  const getContactDetail = async () => {
    setSearchLoader(true);
    let response = await fetch(
      `http://13.211.126.106:3012/u9clgWg4OzQBwLNp/${params.id}`
    );
    let json = await response.json();
    setSearchResult(json);
    setFirstName(json.firstName);
    setLastName(json.lastName);
    setPhone(json.phone);
    setSearchLoader(false);
  };
  useEffect(() => {
    getContactDetail();
  }, []);

  async function handleSave() {
    setError('')
    if(checkError()){
      return
    }
    setSearchLoader(true);

    var baseUrl = `http://13.211.126.106:3012/u9clgWg4OzQBwLNp/editContact`;
    await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: searchResult.key,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
      }),
    });
    setSearchLoader(false);
  }

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
                uri: `https://api.dicebear.com/6.x/micah/png?seed=${searchResult.firstName}${searchResult.lastName}&facialHair[]&hair=dannyPhantom,full,pixie,turban,fonze&hairColor=000000,77311d,ac6651,f4d150,fc909f&mouth=laughing,nervous,pucker,smile,smirk,surprised&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`,
              }}
            />
            {searchLoader && <ActivityIndicator size="large" />}
            <View
              style={{
                height: '100%',
                backgroundColor: 'white',
                width: '100%',
                marginTop: -60,
                paddingTop: 75,
                zIndex: -1,
                borderRadius: 30,
                gap: 13,
              }}
            >
              <Text style={{color: 'red', marginLeft: 20}}>{error}</Text>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 20,
                }}
              >
                <TextInput
                  style={{
                    height: 40,
                    borderWidth: 1.5,
                    width: '48%',

                    paddingHorizontal: 10,
                    color: 'black',
                  }}
                  placeholderTextColor="black"
                  value={firstName}
                  underlineColorAndroid="transparent"
                  placeholder="First Name"
                  onChangeText={(text) => {
                    setFirstName(text);
                  }}
                />
                <TextInput
                  style={{
                    height: 40,
                    width: '48%',
                    borderWidth: 1.5,
                    paddingHorizontal: 10,
                    color: 'black',
                  }}
                  placeholderTextColor="black"
                  value={lastName}
                  underlineColorAndroid="transparent"
                  placeholder="Last Name"
                  onChangeText={(text) => {
                    setLastName(text);
                  }}
                />
              </View>
              <TextInput
                style={{
                  height: 40,
                  borderWidth: 1.5,
                  marginLeft: 20,
                  marginRight: 20,
                  paddingHorizontal: 10,
                  color: 'black',
                }}
                placeholderTextColor="black"
                value={phone}
                underlineColorAndroid="transparent"
                placeholder="Phone Number"
                onChangeText={(text) => {
                  setPhone(text);
                }}
              />
              <View style={{ alignItems: 'flex-end', marginRight: 20 }}>
                <TouchableOpacity
                  onPress={handleSave}
                  style={{
                    backgroundColor: '#4a69bb',
                    width: 90,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 10,
                    borderRadius: 5,
                  }}
                >
                  <Text style={{ color: 'white', fontSize: 18 }}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Image>
      </View>
    </SafeAreaView>
  );
};

export default ContactDetail;
