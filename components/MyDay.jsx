
import * as React from 'react';
import { Alert, Button, Platform, StyleSheet, Text, View, ImageBackground } from 'react-native';
import Card from './Card'

export default function MyDay() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Day</Text>
            <View style={styles.cardContainer}>
                <Card />
                <Card />
                <Card />
                <Card />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
      fontSize: 30,
      textAlign: 'center',
      marginTop: 60,
      color: '#2C69B7',
      fontWeight: '600'
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
    },
    cardContainer: {
        marginTop: '10%',
        alignItems: 'center'
    }
  });