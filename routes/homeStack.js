import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header'

const HomeStack = createStackNavigator();

export default function Navigator() {
    return (     
        <HomeStack.Navigator 
            initialRouteName="Home" 
            screenOptions={{
                headerStyle: {
                backgroundColor: '#eee',
                height: 60,
                },
                headerTintColor: '#444',
            }}
        >
             {/* the first one will show on the default screen */}
             {/* title prop expects a string, but headerTilte can take a function as a value which can return a componenet */}
            <HomeStack.Screen name="Home" component={Home} options={{headerTitle: () => <Header/>}}/>
            <HomeStack.Screen name="ReviewDetails" component={ReviewDetails} options={{title: 'ReviewDetails'}}/>
        </HomeStack.Navigator>
    );
}
