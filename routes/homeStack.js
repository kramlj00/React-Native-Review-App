import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const HomeStack = createStackNavigator();

export default function Navigator() {
    return (
    <NavigationContainer>      
        <HomeStack.Navigator>
             {/* the first one will show on the default screen */}
             <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen name="ReviewDetails" component={ReviewDetails} />
        </HomeStack.Navigator>
    </NavigationContainer>
    );
}
