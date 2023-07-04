import {StyleSheet, View, ScrollView, Image} from "react-native"
import React, {useCallback, useState} from 'react';
import {Header} from './Header'
import { DiningHallToggle } from "./DiningHallToggle";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {Menu} from './Menu'


SplashScreen.preventAutoHideAsync();

function App() {
  //load fonts
  const [fontsLoaded] = useFonts({
    'Montserrat': require('./assets/fonts/Montserrat-VariableFont_wght.ttf'), // 300 weight
    'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'), //500 weight
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'), //700 weight
  });

  // the following react variables are for future implementation with the toggle bar actually making api calls to change the menu
  const [selectedDiningHall, setSelectedDiningHall] = useState('ratty');

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView className="App" onLayout={onLayoutRootView} style={styles.root}>
      <Header style={styles.header_rectangle}></Header>
      <View style={styles.toggle_wrapper}>
        <DiningHallToggle setter={setSelectedDiningHall}></DiningHallToggle>
      </View>
      <Menu style={styles.menu} diningHall={selectedDiningHall}></Menu>
      <View style={styles.bottom_padding}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root:{
  },
  header_rectangle: {
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    boxSizing: `border-box`,
    width: `100%`,
    height: 132,
  },
  toggle_wrapper :{
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 9,
  },
  menu: {
    paddingLeft: 26,
    paddingRight: 26,
  },
  bottom_padding: {
    padding: 37,
  },
});

export default App;
