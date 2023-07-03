// import { StyleSheet, Text, View, Image } from 'react-native';


// const staticImage = require('./assets/images/brown-crest.png');
// export const Header = () => {
//     return (

//         <View style={styles.root}>
//         <View style={styles.rectangle1}/>
//         <Text style={styles.brownDining}>
//         Brown Dining 
//         </Text>
//         <Image source={{staticImage}} style={{width: 66, height: 37}} contentFit="cover"/>
//         </View>

//       );
// }

// const styles = StyleSheet.create({
//     root: {
//       backgroundColor: `rgba(250, 250, 250, 1)`,
//       width: '100%',
//       // height: '6.4545%',
//       // height: '30%',
//       flexShrink: 0,
//       // flex:1,
//       // flexDirection: 'column',
//     },
//     rectangle1: {
//     //   width: '393rem',
//     //   height: '132rem',
//       width: '100%',
//       height: '6.4545%',
//       flexShrink: 0,
//       backgroundColor: '#FAFAFA',
//       boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.25)',
//     },
//     brownDining: {
//       color: '#545151',
//     //   fontSize: '30rem',
//       fontFamily: 'Montserrat',
//       // fontStyle: 'normal',
//       fontWeight: '700',
//       // lineHeight: 'normal',
//     },
//     image1: {
//     //   width: '66rem',
//     //   height: '37rem',
//       width: '16.8%',
//       height: '28%',
//       flexShrink: 0,
//     },
//   });

import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
const staticImage = require('./assets/images/brown-crest.png');

export function Header() {
  return (
    <View style={styles.root}>
      <View style={styles.headerRectangle}>
        <Text style={styles.brownDining}>Brown Dining</Text>
        <Image source={{staticImage}} style={{width: 66, height: 37}} contentFit="cover"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    root: {
      width: 393,
      height: 132,
      flexShrink: 0,
      shadowOffset:{
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
    },
    headerRectangle: {
      width: 393,
      height: 132,
      flexShrink: 0,
      backgroundColor: '#FAFAFA',
      boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.25)',
    },
    brownDining: {
      color: '#545151',
      fontSize: 30,
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '700',
      textAlignVertical: 'bottom',
      paddingLeft: 22,
      paddingRight: 153,
      paddingTop: 77,
      paddingBottom: 18,
      // lineHeight: 'normal',
    },
    brownCrest: {
      width: 66,
      height: 37,
      flexShrink: 0,
    },
  });

export default {Header};
