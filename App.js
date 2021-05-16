import React, { useState } from 'react';

import Home from './screens/home'
import About from './screens/about'
import ReviewDetails from './screens/reviewDetails'

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

// vraćamo jednu vrijednost pa ne trebaju {} ni return
const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
})

export default function App() {
  // prije neko što se font učita neće se prikazati Home komponenta
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return (
      <Home/>
    );
  } else {
    return(
      <AppLoading
        startAsync = {getFonts}
        onFinish = {() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}