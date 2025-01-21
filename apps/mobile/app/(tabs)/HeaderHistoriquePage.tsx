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
    { start: '2023-01-01', end: '2023-01-31'},
    { start: '2023-02-01', end: '2023-02-31'},
    { start: '2023-03-01', end: '2023-03-31'},
    { start: '2023-04-01', end: '2023-04-31'},
    { start: '2023-05-01', end: '2023-05-31'},
    { start: '2023-06-01', end: '2023-06-31'},
    { start: '2023-07-01', end: '2023-07-31'},
    { start: '2023-08-01', end: '2023-08-31'},
    { start: '2023-09-01', end: '2023-09-31'},
    { start: '2023-10-01', end: '2023-10-31'},
    { start: '2023-11-01', end: '2023-11-31'},
    { start: '2023-12-01', end: '2023-12-31'},
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  }
});

export default HeaderHistoriquePage;