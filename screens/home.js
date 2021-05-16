import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home(){
    return(
        <View style = {styles.container}>
            <Text style = {styles.titleText}>Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 18,
        color: '#333'
    },
})