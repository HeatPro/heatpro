import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface CustomInput {
  placeholder: string;
  icon: keyof typeof Ionicons.glyphMap;
  secureTextEntry?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
  containerStyle?: any;
  style?: any;
  placeholderColor?: any;
  focusedStyle?: any;
  iconStyle?: any;
}

export function CustomInput({ placeholder, icon, secureTextEntry, onChangeText, containerStyle, focusedStyle, style, placeholderColor, iconStyle }: CustomInput) {

  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <View style={[styles.inputContainer, containerStyle, isFocused && focusedStyle]}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={[styles.input, style]}
        placeholderTextColor={placeholderColor ? placeholderColor : "#8B8B8B"}
        onChangeText={onChangeText}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <Ionicons name={icon} size={20} color="#8B8B8B" style={[styles.icon, iconStyle]} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    width: '100%',
    borderWidth: 1,
    borderColor: '#E0E0E0'
  },
  input: {
    flex: 1,
    color: '#333',
    fontSize: 16,
    textAlign: 'auto',
    outlineStyle: 'none'
  },
  icon: {
    fontWeight: 'bold'
  },
});