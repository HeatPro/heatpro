import React, { useState } from 'react';
import {StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { IconProps } from '@/components/ui/HeatProComponents/headers/HeaderFicheTechniqueIntervention';
import { CustomButtonWithIcon } from '../../CustomButtonWithIcon';
import { CalendarButton } from '../calendarButton';

export interface Periode {
  start: string;
  end: string;
}

interface HeaderHistoriqueProps {
  title: string;
  description: string;
  serialNumber: number;
  leftIcon: IconProps;
  rightIcon: IconProps;
  leftButtonIcon: string;
  rightButtonIcon: string;
  calendar: Periode[];
  style?: object;
}

export function HeaderHistorique({
                                  title,
                                  description,
                                  serialNumber,
                                  leftIcon,
                                  rightIcon,
                                  leftButtonIcon,
                                  rightButtonIcon,
                                  calendar,
                                  style
                                }: Readonly<HeaderHistoriqueProps>) {



  const onPress2 = () => {
    console.log('Menu de droite cliqué');
  };

  return (
    <View style={styles.container}>
      <View style={styles.firstRow}>
        <Icon name={leftIcon.iconName} size={leftIcon.iconSize ? leftIcon.iconSize : 24} color="#FFFFFF" />
        <View style={styles.firstMenu}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc}>{description} : {serialNumber}</Text>
        </View>
        <Icon name={rightIcon.iconName} size={rightIcon.iconSize ? rightIcon.iconSize : 24} color="#FFFFFF" />
      </View>  
      <View style={styles.secondRow}>
        <CustomButtonWithIcon onPress={onPress2} iconName={leftButtonIcon}></CustomButtonWithIcon>
        <CalendarButton calendar={calendar}></CalendarButton>
        <CustomButtonWithIcon onPress={onPress2} iconName={rightButtonIcon}></CustomButtonWithIcon>
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
    marginTop: "10%",
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom:"5%"
  },
  firstMenu: {
    paddingTop:'5%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondRow: {
    padding:"5%",
    backgroundColor:'black',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textShadowColor: '#00000040',
    textShadowRadius: 15,
    textShadowOffset: { width: 0, height:5 }
  },
  desc:{
    fontSize: 15,
    fontStyle:'italic',
    color: '#FFFFFF',
    textShadowColor: '#00000040',
    textShadowRadius: 8.3,
    textShadowOffset: { width: 0, height: 2 }
  },
});