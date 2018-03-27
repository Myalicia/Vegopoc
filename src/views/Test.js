import React from 'react'
import { View, Text } from 'react-native'
import { Link } from 'react-router-native'

export default () => {
  return (
    <View>
      <Text> testpage </Text>
      <Link to="/" >
        <Text> Back </Text>
      </Link>
    </View>
  )
}
