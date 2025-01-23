import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HololensQRCodePage = () => {

  const onPressBackButton = () => {
    console.log("back button pressed");
  }

  return (
    <View style={styles.globalContainer}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={onPressBackButton}>
            <Icon name="arrow-back-ios-new" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Lunettes AR</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.qrCodeImage}>
          <Image
            // TODO : Générer un QR Code à la volée à partir de l'id de la machine, trop dur d'avoir une image dynamique
            source={require('C:\\Users\\Michel K\\Desktop\\Polytech\\SI5\\SI5-IHM\\CCPS\\Projet\\heatpro\\apps\\mobile\\assets\\images\\qrcode.png')}
            style={styles.qrCode}
          />
        </View>
        <View style={styles.card}>
          <View style={styles.cardTitleContainer}>
            <Text style={styles.cardTitle}>QR Code - Lunettes RA</Text>
          </View>
          <View style={styles.cardInfoContainer}>
            <Text style={styles.description}>
              Scanner le QR Code ci dessus à l’aide de vos lunettes de réalité augmentée afin d’accéder à l’interface
              dédiée sur celles-ci.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  globalContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#B3B3B3'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#B3B3B3'
  },
  header: {
    backgroundColor: '#657DDF',
    marginBottom: 128,
    width: '100%',
    paddingBottom: 62,
    paddingTop: 24,
    paddingHorizontal: 24
  },
  headerContent: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700'
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    padding: 16,

    // Ombre pour Android
    elevation: 3,

    // Ombre pour iOS
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.18,
    shadowRadius: 12
  },
  cardTitleContainer: {
    marginBottom: 12,
    alignSelf: 'flex-start' // Garde le titre aligné à gauche
  },
  cardTitle: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 500
  },
  cardInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  description: {
    flexWrap: 'wrap',
    fontSize: 12,
    color: '#454343'
  },
  qrCodeImage: {
    padding: 24,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    width: '70%',
    aspectRatio: 1
  },
  qrCode: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  }
});

export default HololensQRCodePage;
