import React from 'react';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Assurez-vous d'importer la bonne bibliothèque
import { StyleSheet } from 'react-native';

export function CustomButtonWithIcon({ onPress, iconName }: { onPress: () => void, iconName: string }) {
  return (
    <Button
      buttonStyle={styles.button}
      icon={
        <Icon
          name={iconName}
          size={25}
          color="white"
        />
      }
      onPress={onPress}
    />
  );
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        backgroundColor: '#748BE8',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        height:90,
    },
});