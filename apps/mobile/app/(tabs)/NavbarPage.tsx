import React from 'react';
import { StyleSheet, View } from 'react-native';
import NavigationBar from '@/components/ui/HeatProComponents/NavigationBar';

const NavBarPage = () => {

  return (
    <View style={styles.container}>
      <NavigationBar navBarWidth="95%"></NavigationBar>
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

export default NavBarPage;