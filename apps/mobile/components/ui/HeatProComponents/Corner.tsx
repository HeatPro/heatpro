import React from 'react';
import { StyleSheet, Image } from 'react-native';

const Corner = ({ imgSource , style}) => {
    return <Image
        source={imgSource}
        style={style ? [styles.corner, style] : styles.corner}
    />
}
const styles = StyleSheet.create({
        corner:{
            width: 100,
            height: 100,
            position: 'absolute',
          }
 });


 export default Corner;