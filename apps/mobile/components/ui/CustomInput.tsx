import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface CustomInput {
  placeholder: string;
  icon: keyof typeof Ionicons.glyphMap;
  secureTextEntry?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
  style?: object;
  inputContainerStyle?: object;
  placeholderTextColor?: string;
}

export function CustomInput({ placeholder, icon, secureTextEntry, onChangeText, inputContainerStyle, textInputStyle, placeholderTextColor }: CustomInput) {
  return (
    <View style={[styles.inputContainer, inputContainerStyle]}>
      <Ionicons name={icon} size={20} color="#8B8B8B" style={styles.icon} />
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={[styles.input, textInputStyle]}
        placeholderTextColor={placeholderTextColor ? placeholderTextColor: "#8B8B8B"}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    paddingHorizontal: 15,
    height: 50,
    width: '100%',
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: '#333',
    fontSize: 16,
  },
  icon: {
    width: 20,
    color: '#43439f',
    fontWeight: 'bold',
  },
});