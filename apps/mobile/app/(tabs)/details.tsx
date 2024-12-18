import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, Image } from 'react-native';


type InfoDisplayProps = {
  icon: any; 
  description: string;
  data: any;
};

const InfoDisplay: React.FC<InfoDisplayProps> = ({ icon, description, data }) => {
  return (
    <View style={styles.dataStyle}>
      <Image 
        source={icon}
        style={styles.icon}
        resizeMode='contain'
      ></Image>
      <Text style={styles.text}>{description}</Text>
      <Image 
        source={require('../../assets/images/line.png')}
        resizeMode='contain'
      ></Image>
      <Text style={styles.text}>{data}</Text>
    </View>
  )
}


export default function DetailsScreen() {
  const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const months = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];

  const today = new Date();
  const dayName = days[today.getDay()];
  const dayNumber = today.getDate();
  const monthName = months[today.getMonth()];

  const formattedDate = `${dayName} ${dayNumber} ${monthName}`;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/arrow-left.png')}
          resizeMode="contain"
          style={styles.arrow}
        />
        <View style={styles.textContainer}>
          <Text style={styles.textHeader}>Réparation</Text>
          <Text style={styles.textDate}>{formattedDate}</Text>
        </View>
      </View>
      <ScrollView style={styles.dataDisplay}>
        <View style={styles.card}>
          <Text style = {[{fontSize:14,fontWeight:500}]}>Informations générales</Text>
          <InfoDisplay
            icon={require('../../assets/images/tool.png')}
            description="Type de maintenance"
            data = "Corrective"
          ></InfoDisplay>
          <InfoDisplay
            icon={require('../../assets/images/calender.png')}
            description="Date et heure"
            data = {"Mardi 20 sept."}
          ></InfoDisplay>
          <InfoDisplay
            icon={require('../../assets/images/profil.png')}
            description="Technicien intervenu"
            data = "Igor Levic"
          ></InfoDisplay>
          <View style={styles.dataStyle}>
            <Image 
              source={require('../../assets/images/sheet.png')}
              style={styles.icon}
              resizeMode='contain'
            ></Image>
            <Text style={styles.text}>Problèmes résolus</Text>
            <Image 
              source={require('../../assets/images/line.png')}
              resizeMode='contain'
            ></Image>
            <Image 
              source={require('../../assets/images/cancel.png')}
              resizeMode='contain'
              style = {[{width : 20}]}
            ></Image>
          </View>
        </View> 
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.2,
    flexDirection: 'row',
    paddingTop: '5%',
    backgroundColor: '#657DDF',
    alignItems: 'center',
    paddingHorizontal: 15, 
  },
  arrow: {
    width: 30,
  },
  textContainer: {
    flex: 0.90, 
    alignItems: 'center', 
  },
  textHeader: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  textDate: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  dataDisplay: {
    flex: 0.8,
    backgroundColor: '#F4F5F8',
  },
  card : {
    backgroundColor:'#FFFFFF',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 8, 
    elevation: 5,
    margin:10,
    width:"95%",
  },
  dataStyle : {
    flex:1,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent : 'center',
  },
  text:{
    fontSize:12,
    marginLeft:10,
    marginRight:10
  },
  icon : {
    width:20
  }
});
