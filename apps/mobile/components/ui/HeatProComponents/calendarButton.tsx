import React, { useState , useEffect } from 'react';
import {StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Periode } from './headers/HeaderHistorique';
import Icon from 'react-native-vector-icons/MaterialIcons';

export interface CalendarButtonProps {
    calendar: Periode[];
    style?: object;
}

export const CalendarButton: React.FC<CalendarButtonProps> = ({ calendar, style }) => {
    const [currentPeriodeIndex, setCurrentPeriodeIndex] = useState(0);
    const [currentText , setCurrentText] = useState("Aucune période");
    useEffect(() => {
        calendar.forEach(element => {
            console.log(element.start+" "+element.end);
        });
        if (calendar && calendar.length > 0) {
          processPeriode();
        }
      }, [calendar]);

    
    const processPeriode = ()  => {
        if(calendar && calendar.length > 0){
            let periode = calendar[currentPeriodeIndex];
            const startDate = new Date(periode.start);
            const endDate = new Date(periode.end);
            const options = { day: 'numeric', month: 'short' } as const;
            const startFormatted = startDate.toLocaleDateString('en-US', options);
            const endFormatted = endDate.toLocaleDateString('en-US', options);
            setCurrentText(`${startFormatted} - ${endFormatted}`);
        }else{
            return 'Aucune période';
        }
    }
    
    const back = () => {
        console.log('Menu de gauche cliqué');
        if(currentPeriodeIndex > 0){
            setCurrentPeriodeIndex(currentPeriodeIndex - 1);
            processPeriode();
        }
    };
    
    const forward = () => {
        console.log('Menu de droite cliqué');
        if(currentPeriodeIndex < 12){
            setCurrentPeriodeIndex(currentPeriodeIndex + 1);
            processPeriode();
        }
    };

    return (<View style={style ? [styles.container,style] : styles.container}>
        <Icon 
            name='arrow-back-ios'
            size={20}
            color='white'
            onPress={back}
        ></Icon>
        <Text style={styles.text}> {currentText} </Text>
        <Icon 
            name='arrow-forward-ios'
            size={20}
            color='white'
            onPress={forward}
        ></Icon>
    </View>);
};

const styles = StyleSheet.create({
    container:{
        flex:0.6,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
        height:"100%",
        backgroundColor: '#748BE8',
    },
    text :{
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
    }
});