/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { NativeRouter, Route, Link } from 'react-router-native'

import Home from './src/views/Home'
import Test from './src/views/Test'
import Header from 'Todo_app/src/components/Header'



export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      list: [

      ]
    }
  }

  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
        <View style={styles.titlebar}>
        <Header />
        </View>
          <Route exact path="/" component={Home} />
          <Route path="/Test" component={Test} />
        </View>
      </NativeRouter>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
  titlebar: {
    backgroundColor: 'grey',
    margin: 11,
    
  },
})
