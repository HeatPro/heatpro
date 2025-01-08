import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  style?: object;
  textStyle?: object;
}

export function CustomButton({ title, onPress, style, textStyle }: CustomButtonProps) {
  return (
    <TouchableOpacity style={style ? [styles.button, style] : styles.button} onPress={onPress}>
      <Text style={textStyle ? [styles.buttonText, textStyle] : styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#43439f',
    borderRadius: 10,
    padding: 15,
    flex: 1,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});