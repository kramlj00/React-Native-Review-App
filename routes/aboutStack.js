import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/about';

const AboutStack = createStackNavigator();

export default function Navigator() {
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
            <AboutStack.Screen name="About" component={About} options={{title: 'About GameZone'}}/>
        </AboutStack.Navigator>
    );
}
