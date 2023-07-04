import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
const staticImage = require('./assets/images/Brown-Crest.png');

export function Header() {
  return (
    <View style={styles.root}>
      <View style={styles.headerRectangle}>
        <View style={styles.imageContainer}>
          <Image source={staticImage} style={styles.brownCrest}/>
        </View>
        <Text style={styles.brownDining}>Brown Dining</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    root: {
      height: 132,
      
    },
    headerRectangle: {
      width: 393,
      height: 132,
      flexShrink: 0,
      backgroundColor: '#FAFAFA',
      shadowOffset:{
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
    },
    brownDining: {
      color: '#545151',
      fontSize: 30,
      fontFamily: 'Montserrat-Bold',
      // textAlignVertical: 'bottom',
      paddingLeft: 22,
      paddingRight: 153,
      paddingTop: 22,
      // paddingBottom: 18,
    },
    imageContainer: {
      flexShrink: 0,
      alignSelf: 'flex-end',
      paddingTop: 18,
      paddingRight: 17,
    },
  });

export default {Header};
