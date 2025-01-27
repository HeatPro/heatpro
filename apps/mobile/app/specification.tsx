import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  HeaderFicheTechniqueIntervention,
  IconProps
} from '@/components/ui/HeatProComponents/headers/HeaderFicheTechniqueIntervention';
import PartsCardComponent, { Part } from '@/components/ui/HeatProComponents/PartsCard';
import { router } from 'expo-router';

const SpecificationPage = () => {

  const onProfilePress = () => {
    router.push("/profile-page")
  };

  const onDisconnectPress = () => {
    router.push("/login")
  };

  const leftIcon: IconProps = { iconName: 'person', onPress: onProfilePress };
  const rightIcon: IconProps = { iconName: 'logout', onPress: onDisconnectPress };

  const parts: Part[] = [
    { name: 'Rotor de pompe à circulation', ref: '829294949500' },
    { name: 'Rotor de pompe à circulation', ref: '824526874123' }
  ];

  return (
    <View style={styles.container}>
      <HeaderFicheTechniqueIntervention title="Fiche technique" leftIcon={leftIcon} rightIcon={rightIcon}
                                        leftMenu="Constructeur"
                                        rightMenu="Spécifications"></HeaderFicheTechniqueIntervention>
      <PartsCardComponent title={'Pièces actuelles'} parts={parts}></PartsCardComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  }
});

export default SpecificationPage;