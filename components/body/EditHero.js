import React from 'react'
import {View, Image, ImageBackground} from 'react-native'
import {images} from '../../constants'
function EditHero() {
  return (
    <View>
      <ImageBackground resizeMode='contain' style={{height: "20%"}} source={images.background} />
    </View>
  )
}

export default EditHero