import {StyleSheet, View } from "react-native"
import React, { useState } from 'react';



export const DiningHallToggle = () => {
    const[rattySelected, setRattySelected] = useState<Boolean>(true); //initialize Ratty to be selected!
    <View>
        {/* <Button 
            classNamre="ratty-toggle-container"
            title=""
        /> */}
        <View className="ratty-toggle-container">
            <View style={styles.rectangle_ratty}/>
            <View style={rattySelected ? styles.rectangle_selected : styles.rectangle_unselected}/>
            <View className={"ratty-toggle-label"} style={rattySelected ? styles.diningLabel_selected : styles.diningLabel_unselected}>Ratty</View> {/* Ratty starts out selected until toggled! */}
        </View>
        <View className="andrews-toggle-container">
            <View style={styles.rectangle_andrews}/>
            <View style={rattySelected ? styles.rectangle_unselected : styles.rectangle_selected}/>
            <View className={"andrews-toggle-label"} style={rattySelected ? styles.diningLabel_unselected : styles.diningLabel_selected}>Andrews</View>
        </View>
    </View>
}

const toggleSelectedDiningHall = () => {
    if(rattySelected){
        setRattySelected(false);
    } else{
        setRattySelected(true);
    }
}

const styles = StyleSheet.create({
    diningLabel_selected: {
        height: 18,
        fontSize: 15,
        fontWeight: '700',
        textAlign: 'center',
        textAlignVertical: 'top',
        color: '#ffffff',
      },
      diningLabel_unselected: {
        height: 18,
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'center',
        textAlignVertical: 'top',
        color: '#414141',
      },
      rectangle_ratty: {
        display: 'flex',
        flexDirection: 'column',
        width: 170,
        height: 36,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
      },
      rectangle_andrews: {
        display: 'flex',
        flexDirection: 'column',
        width: 170,
        height: 36,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
      }
});

//TODO need a determine style function for Ratty and Andrews!

export default {DiningHallToggle}