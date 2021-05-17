import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

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
            <HomeStack.Screen name="Home" component={Home} options={{title: 'GameZone'}}/>
            <HomeStack.Screen name="ReviewDetails" component={ReviewDetails} options={{title: 'ReviewDetails'}}/>
        </HomeStack.Navigator>
    );
}
