import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function Footer() {
  return (
    <View
      style={{
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        height: 90,
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        paddingBottom:10
      }}
    >
      <TouchableOpacity onPress={() => null} style={{paddingHorizontal: 15, paddingVertical: 10}}>
        <AntDesign name="contacts" size={34} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={{paddingHorizontal: 15, paddingVertical: 10}} onPress={() => null}>
        <MaterialIcons name="favorite-border" size={34} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={{paddingHorizontal: 15, paddingVertical: 10}} onPress={() => null}>
        <Ionicons name="add" size={34} color="black" />
      </TouchableOpacity>
    </View>
  );
}

export default Footer;
