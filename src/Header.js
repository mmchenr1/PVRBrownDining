import { StyleSheet, Text, View, Image } from 'react-native';


const staticImage = require('./static/brown-crest.png');
export const Header = () => {
    return (
        <View className="header-panel">
            <Image source={staticImage} styles={styles.image} />
            <Text className="header-text-wrapper" style={styles.text}>Brown Dining</Text>
        </View>
      );
}

const styles = StyleSheet.create({
    image: {
        innerHeight: 37,
        screenLeft: 327,
        screenTop: 18,
        innerWidth: 66,

        // height: 37px,
        // left: 327px,
        // object-fit: cover,
        // position: absolute,
        // top: 18px,
        // width: 66px,
    },
    text: {
        fontSize: 30,
        fontWeight: '700',
        textAlign: 'left',
        textAlignVertical: 'top',
        color: '#545151',
    }
});

export default {Header};