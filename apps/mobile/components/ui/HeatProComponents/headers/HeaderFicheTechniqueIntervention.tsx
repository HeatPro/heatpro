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
  leftMenu?: string;
  rightMenu?: string;
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
    <View style={[styles.container, style]}>
      <View style={styles.firstRow}>
        <TouchableOpacity style={styles.leftIcon} onPress={leftIcon.onPress}>
          <Icon 
            name={leftIcon.iconName} 
            size={leftIcon.iconSize || 24} 
            color="#FFFFFF" 
          />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.rightIcon} onPress={rightIcon.onPress}>
          <Icon 
            name={rightIcon.iconName} 
            size={rightIcon.iconSize || 24} 
            color="#FFFFFF" 
          />
        </TouchableOpacity>
      </View>

      {(leftMenu || rightMenu) && (
        <View style={styles.secondRow}>
          {leftMenu && (
            <TouchableOpacity 
              style={[
                styles.menuElement, 
                indexSelectedMenu === 0 && styles.menuElementSelected,
                styles.firstMenu
              ]}
              onPress={onPress}
            >
              <Text style={styles.menuElementText}>{leftMenu}</Text>
            </TouchableOpacity>
          )}
          {rightMenu && (
            <TouchableOpacity 
              style={[
                styles.menuElement,
                indexSelectedMenu === 1 && styles.menuElementSelected
              ]}
              onPress={onPress2}
            >
              <Text style={styles.menuElementText}>{rightMenu}</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    paddingHorizontal: '5%'
  },
  leftIcon: {
    padding: 8,
  },
  rightIcon: {
    padding: 8,
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
    paddingVertical: 8,
    paddingHorizontal: 3,
    borderRadius: 47,
    flex: 1
  },
  menuElementSelected: {
    backgroundColor: '#748BE8'
  },
  menuElementText: {
    fontSize: 13,
    color: '#FFFFFF',
    textAlign: 'center'
  },
  firstMenu: {
    marginRight: '5%'
  }
});

export default HeaderFicheTechniqueIntervention;