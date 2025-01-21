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
          style={styles.icon} // Ajoutez un style pour l'icône
        />
      }
      onPress={onPress}
    />
  );
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        backgroundColor: '#657DDF',
        borderRadius: 100,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        marginRight: 10, // Ajoutez une marge pour donner plus d'espace à l'icône
    },
});