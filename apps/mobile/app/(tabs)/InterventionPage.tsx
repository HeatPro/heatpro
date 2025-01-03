import React from 'react';
import { StyleSheet, View } from 'react-native';
import InterventionCardComponent, { Field } from '@/components/ui/InfoCard';

const InterventionPage = () => {

  const fields: Field[] = [
    {
      label: 'Type de maintenance',
      value: 'Corrective',
      icon: { icon: 'build', color: '#657DDF' }
    },
    {
      label: 'Date et heure',
      value: 'Mardi 28 sept.',
      icon: { icon: 'event', color: '#657DDF' }
    },
    {
      label: 'Technicien intervenu',
      value: 'Igor Levic',
      icon: { icon: 'person', color: '#657DDF' }
    },
    {
      label: 'Problèmes résolus',
      valueIcon: { icon: 'cancel', color: '#ff0000' },
      icon: { icon: 'assignment', color: '#657DDF' }
    }
  ];


  return (
    <View style={styles.container}>
      <InterventionCardComponent title="Informations générales" fields={fields} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  }
});

export default InterventionPage;