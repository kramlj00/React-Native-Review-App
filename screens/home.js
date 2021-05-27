import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Card from '../shared/card'
import {MaterialIcons} from '@expo/vector-icons'

import { globalStyles } from '../styles/global'
import ReviewForm from './reviewForm'

export default function Home({ navigation }){

    const [modalOpen, setModalOpen] = useState(false);

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
    ])

    const addReview = (review) => {
        // this is not the best way to generate a key
        // but chances of generating the same key are low
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            // takes new review and all current reviews
            // new review will apear at the top
            return [review, ...currentReviews];
        });
        // after submiting new review, modal will close
        setModalOpen(false);
    }

    return(
        <View style = {globalStyles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons 
                            name='close' 
                            size={24}
                            onPress={() => setModalOpen(false)}
                            style={{...styles.modalToggle, ...styles.modalClosed}} /* applying multiple styles */
                        />
                        <ReviewForm addReview={addReview}/>
                        
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            
            <MaterialIcons 
                name='add' 
                size={24}
                onPress={() => setModalOpen(true)}
                style={styles.modalToggle}
            />

            <FlatList
                data={reviews}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{ item.title }</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
      </View>
    )
}

const styles = StyleSheet.create({
    modalToggle: {
        borderWidth: 1,
        borderColor: '#fff',
        alignSelf: 'center',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    modalClosed: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1,
    }
})