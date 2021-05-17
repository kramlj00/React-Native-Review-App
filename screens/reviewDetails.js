import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

import { globalStyles } from '../styles/global'

// only components in homeStack.js can access navigation prop 
export default function ReviewDetails({ route }){

    const { title, body, rating } = route.params;

    return(
        <View style = {globalStyles.container}>
            <Text>{title}</Text>
            <Text>{body}</Text>
            <Text>{rating}</Text>
        </View>
    )
}