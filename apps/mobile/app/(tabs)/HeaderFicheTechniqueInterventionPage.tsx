import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  HeaderFicheTechniqueIntervention,
  IconProps
} from '@/components/ui/HeatProComponents/headers/HeaderFicheTechniqueIntervention';

const HeaderFicheTechniqueInterventionPage = () => {

  const leftIcon: IconProps = { iconName: 'person' };
  const rightIcon: IconProps = { iconName: 'logout' };

  return (
    <View style={styles.container}>
      <HeaderFicheTechniqueIntervention title="Intervention" leftIcon={leftIcon} rightIcon={rightIcon}
                                        leftMenu="Visualisation" rightMenu="Édition"></HeaderFicheTechniqueIntervention>
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

export default HeaderFicheTechniqueInterventionPage;