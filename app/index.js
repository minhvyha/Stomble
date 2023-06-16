import React, { useEffect, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { useIsFocused } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const App = () => {
  const router = useRouter();

  let [contactList, setContactList] = useState([]);
  let [filterList, setFilterList] = useState([]);
  let [search, setSearch] = useState('');
  const isFocused = useIsFocused();

  const getContactList = async () => {
    let response = await fetch('http://13.211.126.106:3012/u9clgWg4OzQBwLNp');
    let json = await response.json();
    setContactList(json);
    setFilterList(json);
  };
  useEffect(() => {
    getContactList();
  }, [isFocused]);

  let _renderItem = ({ item }) => (
    <MyListItem id={item.key} detail={item} router={router} handleDelete={handleDelete} />
  );

  const ItemSeperator = () => {
    return <View style={{ height: 1, backgroundColor: '#c8c8c8' }} />;
  };

  const searchFilter = (text) => {
    if (text) {
      const newData = contactList.filter((item) => {
        const name =
          item.firstName && item.lastName
            ? (item.firstName + ' ' + item.lastName).toLowerCase()
            : '';
        const phone = item.phone ? item.phone.toLowerCase() : '';
        return (
          name.includes(text.toLowerCase().trim()) ||
          phone.includes(text.toLowerCase().trim())
        );
      });
      setFilterList(newData);
      setSearch(text);
    } else {
      setFilterList(contactList);
      setSearch(text);
    }
  };

  async function handleDelete(key){
    var baseUrl = `http://13.211.126.106:3012/u9clgWg4OzQBwLNp/deleteContact`;
    await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          key: key
      }),
    });
    getContactList()
  }

  return (
    <SafeAreaView style={{ height: '100%' }}>
      <Stack.Screen
        options={{
          headerTitle: '',
          headerLeft: () => (
            <Text
              style={{ fontSize: 20, fontWeight: 'bold', paddingVertical: 10 }}
            >
              Contact
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => router.push('add')}>
              <Ionicons name="add" size={32} color="black" />
            </TouchableOpacity>
          ),
        }}
      />

      <View style={{ paddingBottom: 50, paddingTop: 10 }}>
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
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search"
          onChangeText={(text) => searchFilter(text)}
        />

        <FlatList
          data={filterList}
          initialNumToRender={5}
          renderItem={_renderItem}
          keyExtractor={(item) => item.key}
          // extraData={selectedId}
          ItemSeparatorComponent={ItemSeperator}
          style={{ height: '100%' }}
        />
      </View>
    </SafeAreaView>
  );
};

class MyListItem extends React.PureComponent {
  render() {
    return (
      <View
        style={{
          paddingVertical: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: 20,
          paddingRight: 20
        }}
      >
        <TouchableOpacity
          delayPressOut={0}
          onPress={() => {
            this.props.router.push(`contact/${this.props.id}`);
          }}
          style={{
            display: 'flex',
            gap: 10,
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1
          }}
        >
          
          <Image
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
            }}
            source={{
              uri: `https://api.dicebear.com/6.x/micah/png?seed=${this.props.detail.firstName}${this.props.detail.lastName}&facialHair[]&hair=dannyPhantom,full,pixie,turban,fonze&hairColor=000000,77311d,ac6651,f4d150,fc909f&mouth=laughing,nervous,pucker,smile,smirk,surprised&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`,
            }}
          />
          <View style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <Text
              style={{
                color: '#000',
                justifyContent: 'center',
                fontSize: 18,
                fontWeight: 'bold',
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
        <TouchableOpacity onPress={() => this.props.handleDelete(this.props.id)}>
        <Feather name="x" size={24} color="black" />
        </TouchableOpacity>
      </View>
    );
  }
}
export default App;
