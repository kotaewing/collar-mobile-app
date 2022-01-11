import * as React from 'react';
import { Alert, TouchableOpacity, Platform, StyleSheet, Text, View, Image } from 'react-native';
var pin = require('./../assets/images/pin.png')

export default function NavBar() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}></TouchableOpacity>
            <TouchableOpacity style={styles.button}></TouchableOpacity>
            <TouchableOpacity style={styles.button}></TouchableOpacity>
            <TouchableOpacity style={styles.button}></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      width: '90%',
      height: '30%',
      borderRadius: 15,
      shadowColor: 'black',
      shadowOpacity: 0.3,
      shadowRadius: 100,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    },
    button: {
        backgroundColor: 'black',
        width: 35,
        height: 35
    }
  });