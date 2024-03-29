import React, { useState } from 'react';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import Navigator from './routes/drawer'

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
      <Navigator/>
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