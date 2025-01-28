import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface NavigationBarItemProps {
  title: string;
  onPress: (index: number) => void;
  iconName: string;
  iconSize: number;
  style?: object;
  iconStyle?: object;
  iconColor?: string;
  textStyle?: object;
}

export function NavigationBarItem({ title, onPress, iconName, iconSize, style, iconStyle, iconColor, textStyle }: Readonly<NavigationBarItemProps>) {
  return (
    <TouchableOpacity style={style ? [styles.navBarItem, style] : styles.navBarItem} onPress={onPress}>
      <Icon name={iconName} size={iconSize} color={iconColor}  style={iconStyle} />
      <Text style={textStyle ? [styles.navBarItemText, textStyle] : styles.navBarItemText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  navBarItem: {
    height: 30,
    padding: 0,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  navBarItemText: {
    position: 'absolute',
    top : 40,
    color: '#657DDF',
    fontSize: 8,
    fontWeight: '600',
  }
});