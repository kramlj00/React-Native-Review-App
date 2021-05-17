import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

import { globalStyles, images } from '../styles/global'
import Card from '../shared/card'

// only components in homeStack.js can access navigation prop 
export default function ReviewDetails({ route }){

    const { title, body, rating } = route.params;

    return(
        <View style = {globalStyles.container}>
            <Card>
                <Text>{title}</Text>
                <Text>{body}</Text>
                <View style={styles.rating}>
                    <Text>Game rating:</Text>
                    <Image source={images.ratings[rating]}/>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    }
})