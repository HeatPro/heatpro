import React from 'react';
import { StyleSheet, View } from 'react-native';
import ModaleComponent from '@/components/ui/HeatProComponents/ModaleComponent';

const ModalValidation = () => {
  return (
    <View style={styles.container}>
      <ModaleComponent title={'Valider le formulaire ?'}
                       description={'Êtes-vous sûr de vouloir valider le formulaire et terminer l’intervention en cours ?'}
                       leftButtonText={'Annuler'} rightButtonText={'Valider'}></ModaleComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F5F8',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ModalValidation;