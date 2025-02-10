import React, { useState, useEffect, FC } from 'react';
import {StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Periode } from './headers/HeaderHistorique';
import Icon from 'react-native-vector-icons/MaterialIcons';

export interface CalendarButtonProps {
    style?: object;
}



export const CalendarButton: React.FC<CalendarButtonProps> = ({ style = {} }: CalendarButtonProps) => {

    const calendar: Periode[] = [
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

    const [currentPeriodeIndex, setCurrentPeriodeIndex] = useState(new Date().getMonth());
    const [currentText , setCurrentText] = useState("Aucune période");
    useEffect(() => {
        calendar.forEach(element => {
            console.log(element.start+" "+element.end);
        });
        if (calendar && calendar.length > 0) {
          processPeriode(currentPeriodeIndex);
        }
      }, [calendar]);

    
      const processPeriode = (index:number) => {
        if (calendar && calendar.length > 0) {
            let periode = calendar[index];
            const startDate = new Date(periode.start);
            const endDate = new Date(periode.end);
            const options = { day: 'numeric', month: 'short' } as const;
            const startFormatted = startDate.toLocaleDateString('en-US', options);
            const endFormatted = endDate.toLocaleDateString('en-US', options);
            setCurrentText(`${startFormatted} - ${endFormatted}`);
        } else {
            setCurrentText('Aucune période');
        }
    };

    const back = () => {
        console.log("back", currentPeriodeIndex);
        if (currentPeriodeIndex > 0) {
            setCurrentPeriodeIndex(prevIndex => {
                const newIndex = prevIndex - 1;
                processPeriode(newIndex);
                return newIndex;
            });
        }
    };
    
    const forward = () => {
        console.log("forward", currentPeriodeIndex);
        if (currentPeriodeIndex < calendar.length - 1) {
            setCurrentPeriodeIndex(prevIndex => {
                const newIndex = prevIndex + 1;
                processPeriode(newIndex);
                return newIndex;
            });
        }
    };

    return (<View style={style ? [styles.container,style] : styles.container}>
        <Icon 
            name='arrow-back-ios'
            size={15}
            color='white'
            onPress={back}
        ></Icon>
        <Text style={styles.text}> {currentText} </Text>
        <Icon 
            name='arrow-forward-ios'
            size={15}
            color='white'
            onPress={forward}
        ></Icon>
    </View>);
};

const styles = StyleSheet.create({
    container:{
        flex:0.5,
        flexDirection: 'row',
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