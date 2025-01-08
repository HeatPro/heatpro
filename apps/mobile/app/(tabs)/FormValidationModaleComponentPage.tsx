import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  HeaderFicheTechniqueIntervention,
  IconProps
} from '@/components/ui/HeatProComponents/headers/HeaderFicheTechniqueIntervention';
import FormValidationModale, { ModaleButtonProp } from '@/components/ui/HeatProComponents/modale/FormValidationModale';

const FormValidationModaleComponentPage = () => {

  const title: string = "Valider le formulaire ?";
  const description: string = "Êtes-vous sûr de vouloir valider le formulaire et terminer l’intervention en cours ?"
  const leftButton: ModaleButtonProp = { text: 'Annuler' };
  const rightButton: ModaleButtonProp = { text: 'Valider' };

  return (
    <View style={styles.container}>
      <FormValidationModale title={title} description={description} leftButton={leftButton} rightButton={rightButton}></FormValidationModale>
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

export default FormValidationModaleComponentPage;