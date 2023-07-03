import {StyleSheet, View, Text} from "react-native"
import React, { useState, useCallback } from 'react';
import {Header} from './Header'
import { DiningHallToggle } from "./DiningHallToggle";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

function App() {
  //load fonts
  const [fontsLoaded] = useFonts({
    'Montserrat': require('./assets/fonts/Montserrat-VariableFont_wght.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className="App" onLayout={onLayoutRootView}>
      <Header style={styles.header_rectangle}></Header>{/* need to render with box shadow*/}
      <DiningHallToggle></DiningHallToggle>
      
      {/* Breakfast */}
      <View style={styles.meal_banner}>
        <Text style={styles.meal}>Breakfast</Text>
        <Text style={styles.time}>7:30 am - 11:00 am</Text>      
      </View>

      {/* Lunch */}
      <View style={styles.meal_banner}>
        <Text style={styles.meal}>Lunch</Text>
        <Text style={styles.time}>11:00 am - 4:00 pm</Text>      
      </View>

      {/* Dinner */}
      <View style={styles.meal_banner}>
        <Text style={styles.meal}>Dinner</Text>
        <Text style={styles.time}>4:00 pm - 7:30 pm</Text>      
      </View>

    </View>
  );
}

const MealHeader = (meal, timeString) => {
  return (
    <View style={styles.root}>
        <Text style={styles.meal}>{meal}</Text>
        <Text style={styles.time}>{timeString}</Text>      
    </View>
  );
}

const styles = StyleSheet.create({
  root:{
    justifyContent: 'center',
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
  meal_banner:{
    display: `flex`,
    flexDirection: `row`,
    justifyContent: 'space-between',
    paddingLeft: 26,
    paddingRight: 26,
    paddingTop: 25,
    paddingBottom: 21
  },
  time: {
    fontFamily:"Montserrat",
    fontWeight: 500,
  },
  meal: {
      fontFamily:"Montserrat",
      fontWeight: 700,
  },
});

export default App;
