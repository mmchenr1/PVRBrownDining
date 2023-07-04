import {StyleSheet, View, Text, Pressable} from "react-native"
import React, { useState } from 'react';


export const DiningHallToggle = (setSelectedDiningHall) => {
    const[rattySelected, setRattySelected] = useState(true); //initialize Ratty to be selected!

    return(
    <View style={styles.root}>
        <View className="ratty-toggle-container">
            <Pressable style={[styles.ratty_toggle_rectangle, rattySelected ? styles.rectangle_selected : styles.rectangle_unselected]}
                onPress = {() => setRattySelected(true)}>
                <Text className={"ratty-toggle-label"} style={[styles.diningLabel, rattySelected ? styles.diningLabel_selected : styles.diningLabel_unselected]}>
                    Ratty
                    </Text>
            </Pressable>
        </View> 
   
        <View className="andrews-toggle-container">
            <Pressable style={[styles.andrews_toggle_rectangle, rattySelected ? styles.rectangle_unselected : styles.rectangle_selected]}
                onPress = {() => setRattySelected(false)}>
                <Text className={"andrews-toggle-label"} style={[styles.diningLabel, rattySelected ? styles.diningLabel_unselected : styles.diningLabel_selected]}>Andrews</Text>
            </Pressable>
        </View>  
    </View>);
}

const styles = StyleSheet.create({
    root: {
        width: '86.5%',
        height: 36,
        flexShrink: 0,
        flexDirection: 'row',
    },
    diningLabel:{
        flexDirection: 'column',
        flexShrink: 0,
        height: 18,
        fontSize: 15,
        textAlign: 'center',
    },
    diningLabel_selected: {
        fontFamily:"Montserrat-Bold",
        color: '#FFF',
      },
    diningLabel_unselected: {
        fontFamily:"Montserrat-Medium",
        color: '#414141',
    },
    ratty_toggle_rectangle: {
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        width: 170,
        height: 36,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
      },
    andrews_toggle_rectangle: {
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        width: 170,
        height: 36,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
      },
      rectangle_selected: {
        backgroundColor: '#C00',
      },
      rectangle_unselected: {
        backgroundColor: '#F4F3F3',
      }
});
