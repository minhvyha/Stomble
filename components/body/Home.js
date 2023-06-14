import React from 'react'
import {View, Image, ImageBackground} from 'react-native'
import {images} from '../../constants'

function Home() {
  return (
    <View>
      <ImageBackground resizeMode='cover' style={{flex: 1, width: null, height: 300}} source={images.background} />
    </View>
  )
}

export default Home