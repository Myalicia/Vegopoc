import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        LAGA NU
      </Text>
    </TouchableOpacity>
  )
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingBottom: 5
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'grey',
    borderRadius: 1,
    borderWidth: 1,
    borderColor: 'white',
    marginLeft: 50,
    marginRight: 50
  }
}

export {Button}