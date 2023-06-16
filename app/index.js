import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import { Stack, useRouter, Redirect } from 'expo-router';
import ScreenHeaderBtn from '../components/header/ScreenHeaderBtn';
import { icons } from '../constants';
import Footer from '../components/body/Footer';
import { AntDesign } from '@expo/vector-icons';


class MyListItem extends React.PureComponent {
  render() {
    return (
      <View
        style={{
          paddingVertical: 10,
        }}
      >
        <TouchableOpacity onPress={() =>{router.push(`contact/${item.key}`)}} style={{display: 'flex', gap: 10, flexDirection: 'row', alignItems: 'center', paddingLeft: 20}}>
        <Image
        style={ {
          width: 50,
          height: 50,
          borderRadius: '50%'
        }}
        source={{
          uri: `https://api.dicebear.com/6.x/micah/png?seed=${this.props.detail.firstName} ${this.props.detail.lastname}&facialHair[]&hair=dannyPhantom,full,pixie,turban,fonze&hairColor=000000,77311d,ac6651,f4d150,fc909f&mouth=laughing,nervous,pucker,smile,smirk,surprised&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`,
        }}
      />
          <View style={{display: 'flex', flexDirection:'column', gap: 5}}>
          <Text
            style={{
              color: '#000',
              justifyContent: 'center',
              fontSize: 18,
              fontWeight: 'bold'
            }}
          >
            {this.props.detail.firstName} {this.props.detail.lastName}
          </Text>
          <Text
            style={{
              color: '#000',
              justifyContent: 'center',
            }}
          >
            {this.props.detail.phone} 
          </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const App = () => {
  const router = useRouter()
  let [contactList, setContactList] = useState([]);
  const getArticlesFromApi = async () => {
    let response = await fetch('http://13.211.126.106:3012/u9clgWg4OzQBwLNp');
    let json = await response.json();
    setContactList(json);
  };
  getArticlesFromApi();

  let _renderItem = ({ item }) => <MyListItem id={item.key} detail={item} />;

  return (
    <SafeAreaView style={{ height: '100%' }}>
      <Stack.Screen
        options={{
          headerShadowVisible: true,
          headerTitle: '',
          height: 1000,
          headerLeft: () => (
            <Text
              style={{ fontSize: 20, fontWeight: 'bold', paddingVertical: 10 }}
            >
              Contact
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <AntDesign name="left" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={{ paddingBottom: 50 }}>
        <FlatList
          data={contactList}
          initialNumToRender={5}
          renderItem={_renderItem}
          keyExtractor={(item) => item.key}
          // extraData={selectedId}
        />
      </View>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
