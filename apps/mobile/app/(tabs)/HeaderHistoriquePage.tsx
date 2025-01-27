import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  IconProps
} from '@/components/ui/HeatProComponents/headers/HeaderFicheTechniqueIntervention';
import { HeaderHistorique,Periode } from '@/components/ui/HeatProComponents/headers/HeaderHistorique';

const HeaderHistoriquePage = () => {

  const leftIcon: IconProps = { iconName: 'person' , iconSize:30};
  const rightIcon: IconProps = { iconName: 'logout', iconSize:30};
  const calender: Periode[] = [
    { start: '2025-01-01', end: '2025-01-31'},
    { start: '2025-02-01', end: '2025-02-28'},
    { start: '2025-03-01', end: '2025-03-31'},
    { start: '2025-04-01', end: '2025-04-30'},
    { start: '2025-05-01', end: '2025-05-31'},
    { start: '2025-06-01', end: '2025-06-30'},
    { start: '2025-07-01', end: '2025-07-31'},
    { start: '2025-08-01', end: '2025-08-31'},
    { start: '2025-09-01', end: '2025-09-30'},
    { start: '2025-10-01', end: '2025-10-31'},
    { start: '2025-11-01', end: '2025-11-30'},
    { start: '2025-12-01', end: '2025-12-31'},
  ];
  
  return (
    <View style={styles.container}>
      <HeaderHistorique title="Historique" description="Machine " serialNumber={333344}leftIcon={leftIcon} rightIcon={rightIcon}
        leftButtonIcon='format-list-bulleted' rightButtonIcon='filter-list' calendar={calender}></HeaderHistorique>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    backgroundColor: '#FFFFFF'
  }
});

export default HeaderHistoriquePage;