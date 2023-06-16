import { Stack, useRouter } from 'expo-router';
import {  useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const add = () => {
  const [searchLoader, setSearchLoader] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  const router = useRouter();

  async function handleSave() {
    setSearchLoader(true);

    var baseUrl = `http://13.211.126.106:3012/u9clgWg4OzQBwLNp/editContact`;
    let buyResult = await fetch(baseUrl, {
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
                uri: `https://api.dicebear.com/6.x/micah/png?seed=${searchResult.firstName} ${searchResult.lastname}&facialHair[]&hair=dannyPhantom,full,pixie,turban,fonze&hairColor=000000,77311d,ac6651,f4d150,fc909f&mouth=laughing,nervous,pucker,smile,smirk,surprised&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`,
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
                placeholder="Last Name"
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
      <Footer />
    </SafeAreaView>
  )
}

export default add