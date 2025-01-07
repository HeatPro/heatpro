import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationBarItem } from '@/components/ui/HeatProComponents/NavigationBarItem';

export interface NavigationBarTabs { // TODO : use this to inject every title of tab & redirection to the right component
  title: string;
  component: string;
}

interface NavigationBarProps {
  navBarWidth: string;

}

const NavigationBarComponent = ({ navBarWidth }: NavigationBarProps) => {

  const [indexSelectedNavigationBarItem, setIndexSelectedNavigationBarItem] = useState(0);

  const onPressVerification = (index: number) => {
    setIndexSelectedNavigationBarItem(index);
  };

  return (
    <View style={[styles.container, { width: navBarWidth }]}>

      {indexSelectedNavigationBarItem == 0 ?
        <NavigationBarItem title="Historique"
                           onPress={() => onPressVerification(0)}
                           iconName="assignment" iconSize={32}
                           style={styles.navbarElement} iconColor="#657DDF" textStyle={styles.navbarTextSelected}></NavigationBarItem>
        :
        <NavigationBarItem title="Historique"
                           onPress={() => onPressVerification(0)}
                           iconName="assignment" iconSize={32}
                           style={styles.navbarElement} iconColor="#9D9D9D" textStyle={styles.navbarText}></NavigationBarItem>
      }
      {indexSelectedNavigationBarItem == 1 ?
        <NavigationBarItem title="Historique"
                           onPress={() => onPressVerification(1)}
                           iconName="assignment" iconSize={32}
                           style={styles.navbarElement} iconColor="#657DDF" textStyle={styles.navbarTextSelected} ></NavigationBarItem>
        :
        <NavigationBarItem title="Historique"
                           onPress={() => onPressVerification(1)}
                           iconName="assignment" iconSize={32}
                           style={styles.navbarElement} iconColor="#9D9D9D" textStyle={styles.navbarText}></NavigationBarItem>
      }
      {indexSelectedNavigationBarItem == 2 ?
        <NavigationBarItem title="Historique"
                           onPress={() => onPressVerification(2)}
                           iconName="assignment" iconSize={32}
                           style={styles.navbarElement} iconColor="#657DDF" textStyle={styles.navbarTextSelected}></NavigationBarItem>
        :
        <NavigationBarItem title="Historique"
                           onPress={() => onPressVerification(2)}
                           iconName="assignment" iconSize={32}
                           style={styles.navbarElement} iconColor="#9D9D9D" textStyle={styles.navbarText}></NavigationBarItem>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 2,
    borderRadius: 32
  },
  navbarElement: {
    display: 'flex',
    flex: 1
  },
  navbarTextSelected: {
    fontSize: 12,
    color: '#657DDF',
    fontWeight: '700'
  },
  navbarText: {
    color: '#9D9D9D',
    fontWeight: '500'
  }
});

export default NavigationBarComponent;