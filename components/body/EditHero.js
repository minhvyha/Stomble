import React from 'react'
import {View, Image, ImageBackground} from 'react-native'
import {images} from '../../constants'
function EditHero() {
  return (
    <View>
      <Image resizeMode='cover' style={{height: "100%", width: "100%"}} source={images.background} />
    </View>
  )
}

export default EditHero