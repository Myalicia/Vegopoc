import React from 'react'
import { Text, view, StyleSheet } from 'react-native'

export default () => {
    return (
        <Text styel={styles.welcome}> Hallå </Text>
    )
}
const styles = StyleSheet.create({
    welcome: {
        color: 'white',
        fontSize: 50,
        textAlign: 'center',
        margin: 10

      }  
})