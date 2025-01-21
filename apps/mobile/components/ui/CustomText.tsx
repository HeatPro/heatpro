import React from 'react';
import { StyleSheet, Text } from 'react-native';

interface CustomTextProps {
    text: string;
    style? : object;
}

const CustomText = ({text , style} :CustomTextProps) => {
    return <Text 
        style={style ? [styles.style, style] : styles.style}
    >
        {text}
    </Text>
}
const styles = StyleSheet.create({
    style:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color:'#4E60AB'
    }
 });


 export default CustomText;