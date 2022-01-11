import * as React from 'react';
import { Alert, Button, Platform, StyleSheet, Text, View, Image } from 'react-native';
var pin = require('./../assets/images/pin.png')

export default function Card() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>UI UX Design Job</Text>
                <Text style={styles.cardSubTitle}>Some sample text here</Text>
                <View style={styles.cardStatusContainer}>
                    <Text style={styles.cardStatus}>CURRENT</Text>
                </View>
                <View style={styles.addressContainer}>
                    <Image source={pin} style={styles.pin} resizeMode="contain"/>
                    <Text style={styles.cardAddress}>123 Beach Front Ave</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 120,
        backgroundColor: '#fff',
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: {
            width: -2,
            height: 3
        },
        shadowOpacity: 0.3,
        marginBottom: 10
    },
    card: {
        width: '90%',
        height: 100,
        borderRadius: 5,
        padding: 20,
    },
    cardTitle: {
        fontWeight: '500',
        fontSize: 16
    },
    cardSubTitle: {
        fontSize: 12,
        color: '#AFAFBD',
        paddingTop: 5
    },
    cardAddress: {
        color: '#AFAFBD',
        fontWeight: '500'
    },
    cardStatusContainer: {
        position: 'absolute',
        right: 0,
        top: 25,
        fontSize: 12,
        backgroundColor: '#02AC65',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5
    },
    cardStatus: {
        fontSize: 12,
        color: '#fff',
        fontWeight: '500'
    },
    pin: {
        width: 15,
        height: 15,
        marginRight: 5
    },
    addressContainer: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 25
    }
  });