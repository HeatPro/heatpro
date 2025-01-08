import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export interface IconProps {
  iconName: string;
  iconSize?: number;
  onPress?: () => void;
}

interface HeaderFicheTechniqueInterventionProps {
  title: string;
  leftIcon: IconProps;
  rightIcon: IconProps;
  leftMenu: string;
  rightMenu: string;
  style?: object;
}


export function HeaderFicheTechniqueIntervention({
                                                   title,
                                                   leftIcon,
                                                   rightIcon,
                                                   leftMenu,
                                                   rightMenu,
                                                   style
                                                 }: Readonly<HeaderFicheTechniqueInterventionProps>) {

  const [indexSelectedMenu, setIndexSelectedMenu] = useState(0);

  const onPress = () => {
    console.log('Menu de gauche cliqué');
    setIndexSelectedMenu(0);
  };

  const onPress2 = () => {
    console.log('Menu de droite cliqué');
    setIndexSelectedMenu(1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.firstRow}>
        <Icon name={leftIcon.iconName} size={leftIcon.iconSize ? leftIcon.iconSize : 24} color="#FFFFFF" />
        <Text style={styles.title}>{title}</Text>
        <Icon name={rightIcon.iconName} size={rightIcon.iconSize ? rightIcon.iconSize : 24} color="#FFFFFF" />
      </View>
      <View style={styles.secondRow}>
        {indexSelectedMenu == 0 ?
          <View style={[styles.menuElement, styles.menuElementSelected, styles.firstMenu]}>
            <TouchableOpacity onPress={onPress}>
              <Text style={styles.menuElementText}>{leftMenu}</Text>
            </TouchableOpacity>
          </View>
          :
          <View style={[styles.menuElement, styles.firstMenu]}>
            <TouchableOpacity onPress={onPress}>
              <Text style={styles.menuElementText}>{leftMenu}</Text>
            </TouchableOpacity>
          </View>
        }
        {indexSelectedMenu == 1
          ?
          <View style={[styles.menuElement, styles.menuElementSelected]}>
            <TouchableOpacity onPress={onPress2}>
              <Text style={styles.menuElementText}>{rightMenu}</Text>
            </TouchableOpacity>
          </View>
          :
          <View style={styles.menuElement}>
            <TouchableOpacity onPress={onPress2}>
              <Text style={styles.menuElementText}>{rightMenu}</Text>
            </TouchableOpacity>
          </View>
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#657DDF',
    width: '100%',
    borderTopStartRadius: 32,
    borderTopEndRadius: 32,
    padding: 16
  },
  firstRow: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 12
  },
  secondRow: {
    display: 'flex',
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textShadowColor: '#00000040',
    textShadowRadius: 8.3,
    textShadowOffset: { width: 0, height: 2 }
  },
  menuElement: {
    paddingVertical: 6,
    borderRadius: 46,
    flex: 1
  },
  menuElementSelected: {
    backgroundColor: '#748BE8'
  },
  menuElementText: {
    fontSize: 12,
    color: '#FFFFFF',
    textAlign: 'center'
  },
  firstMenu: {
    marginRight: '5%'
  }
});