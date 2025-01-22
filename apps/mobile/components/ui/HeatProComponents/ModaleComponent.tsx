import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CustomButton } from '../CustomButton';

interface ModaleComponentProps {
  title: string;
  description: string;
  leftButtonText: string;
  rightButtonText: string;
}


const ModaleComponent: React.FC<ModaleComponentProps> = ({ title, description, leftButtonText, rightButtonText }) => {

  const onPressLeftButton = () => {
    console.log('Bouton de gauche cliqué');
  };

  const onPressRightButton = () => {
    console.log('Bouton de droite cliqué');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{description}</Text>
      <View style={styles.actionsRow}>
        <CustomButton onPress={onPressLeftButton} title={leftButtonText}
                      style={[styles.leftButton, styles.button]}></CustomButton>
        <CustomButton onPress={onPressRightButton} title={rightButtonText}
                      style={[styles.rightButton, styles.button]}></CustomButton>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF0D',
    borderRadius: 8,
    width: '92%',
    padding: 20
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  title: {
    fontWeight: 500,
    fontSize: 16,
    marginBottom: 12
  },
  desc: {
    fontSize: 14,
    color: '#454343',
    marginBottom: 36,
    fontWeight: 500
  },
  button: {
    flex: 1,
    fontSize: 13,
    borderRadius: 40,
    marginVertical: 0,
    paddingVertical: 6,
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 3},
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOpacity: 0.1,
  },
  leftButton: {
    backgroundColor: '#F69091',
    marginRight: 60
  },
  rightButton: {
    backgroundColor: '#7AD890'
  }
});

export default ModaleComponent;