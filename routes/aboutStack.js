import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/about';
import Header from '../shared/header'

const AboutStack = createStackNavigator();

export default function Navigator({navigation}) {
    return (    
        <AboutStack.Navigator 
        initialRouteName="About" 
        screenOptions={{
            headerStyle: {
              backgroundColor: '#eee',
              height: 60,
            },
            headerTintColor: '#444',
          }}
        >
             {/* the first one will show on the default screen */}
            <AboutStack.Screen name="About" component={About} options={{headerTitle: () => <Header navigation={navigation} title='About'/>}}/>
        </AboutStack.Navigator>
    );
}
