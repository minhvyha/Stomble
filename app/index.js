import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Stack, useRouter, Redirect } from 'expo-router';
import ScreenHeaderBtn from '../components/header/ScreenHeaderBtn';
import { icons } from '../constants';

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, { backgroundColor }]}
  >
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
  </TouchableOpacity>
);

class MyListItem extends React.PureComponent {
  render() {
    return (
      <View
        style={{
          paddingVertical: 10,
        }}
      >
        <TouchableOpacity onPress={() => null}>
          <Text
            style={{
              color: '#000',
              height: 40,
              justifyContent: 'center',
            }}
          >
            {this.props.id}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const App = () => {
  const [selectedId, setSelectedId] = useState();

  let [contactList, setContactList] = useState([]);
  const getArticlesFromApi = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();
    setContactList(json);
  };
  getArticlesFromApi();

  let _renderItem = ({ item }) => <MyListItem id={item.id} />;

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
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
      <FlatList
        data={contactList}
        initialNumToRender={5}
        renderItem={_renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
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
