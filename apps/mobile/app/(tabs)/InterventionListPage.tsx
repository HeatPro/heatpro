import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import InterventionCardComponent, { Field } from '@/components/ui/HeatProComponents/InfoCard';

const InterventionSlider = ({ navigation }) => {

  const fields: Field[] = [
    {
      label: 'Horaire',
      value: '09h30',
      icon: { icon: 'event', color: '#657DDF' }
    },
    {
      label: 'Technicien intervenu',
      value: 'Igor Levic',
      icon: { icon: 'person', color: '#657DDF' }
    },
    {
      label: 'Pièces changées',
      value: '4',
      icon: { icon: 'build', color: '#657DDF' }
    },
    {
      label: 'Problèmes résolus',
      valueIcon: { icon: 'cancel', color: '#F69091' },
      icon: { icon: 'assignment', color: '#657DDF' }
    }
  ];

  const fieldsTechnician: Field[] = [
    {
      label: 'Identité',
      value: 'Igor Levic',
      icon: { icon: 'person', color: '#657DDF' }
    },
    {
      label: 'Tél.',
      value: '06 16 24 31 47',
      icon: { icon: 'phone', color: '#657DDF' }
    }
  ];

  const accessInterventionPage = () => {
    navigation.navigate('DetailsIntervention');
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <InterventionCardComponent title="Maintenance corrective" fields={fields} topRightInfo="Mardi 12 Sept. 2024"
                                     onPress={accessInterventionPage} />
          <InterventionCardComponent title="Maintenance corrective" fields={fields} topRightInfo="Mardi 12 Sept. 2024"
                                     onPress={accessInterventionPage} />
          <InterventionCardComponent title="Maintenance corrective" fields={fields} topRightInfo="Mardi 12 Sept. 2024"
                                     onPress={accessInterventionPage} />
          <InterventionCardComponent title="Maintenance corrective" fields={fields} topRightInfo="Mardi 12 Sept. 2024"
                                     onPress={accessInterventionPage} />
          <InterventionCardComponent title="Maintenance corrective" fields={fields} topRightInfo="Mardi 12 Sept. 2024"
                                     onPress={accessInterventionPage} />
          <InterventionCardComponent title="Maintenance corrective" fields={fields} topRightInfo="Mardi 12 Sept. 2024"
                                     onPress={accessInterventionPage} />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B3B3B3'
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center'
  }
});

export default InterventionSlider;