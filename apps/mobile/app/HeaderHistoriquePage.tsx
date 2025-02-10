import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  IconProps
} from '@/components/ui/HeatProComponents/headers/HeaderFicheTechniqueIntervention';
import { HeaderHistorique,Periode } from '@/components/ui/HeatProComponents/headers/HeaderHistorique';

const HeaderHistoriquePage = () => {

  const leftIcon: IconProps = { iconName: 'person' , iconSize:30};
  const rightIcon: IconProps = { iconName: 'logout', iconSize:30};
  
  return (
    <View style={styles.container}>
      <HeaderHistorique title="Historique" description="Machine " serialNumber={333344} leftIcon={leftIcon} rightIcon={rightIcon}
      leftButtonIcon='format-list-bulleted' rightButtonIcon='filter-list' ></HeaderHistorique>
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