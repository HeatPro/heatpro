import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import QRCode from 'react-native-qrcode-svg';
import { router } from 'expo-router';
import HeaderFicheTechniqueIntervention, { IconProps } from '@/components/ui/HeatProComponents/headers/HeaderFicheTechniqueIntervention';

const HololensQRCodePage = () => {

  const onPressBackButton = () => {
    console.log("back button pressed");
  }

  const onProfilePress = () => {
    console.log("profile")
    router.push("/profile-page")
  };

  const onDisconnectPress = () => {
    console.log("disconnect")
    router.push("/login")
  };

  const leftIcon: IconProps = { iconName: 'person', onPress: onProfilePress };
  const rightIcon: IconProps = { iconName: 'logout', onPress: onDisconnectPress };

   const qrCodeSize = Math.min(Dimensions.get('window').width * 0.3, 250);

  return (
    <View style={styles.globalContainer}>
      <View style={styles.header}>
      <HeaderFicheTechniqueIntervention title="Lunettes AR" leftIcon={leftIcon} rightIcon={rightIcon}
                                        ></HeaderFicheTechniqueIntervention>
      </View>
      <View style={styles.container}>
        <View style={styles.qrCodeImage}>
          <QRCode
          value="https://6lcw9gp4g4.ufs.sh/f/ZVcn3ePGCcf5vQJlCpPqM0VGNQufie9Cdr7aT6A4RkwWYsKX"
          size={240}
          backgroundColor="white"
          color="black"
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
    backgroundColor: '#F4F5F8'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4F5F8'
  },
  header: {

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
    aspectRatio: 1,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.18,
    shadowRadius: 12
  },
  qrCode: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  }
});

export default HololensQRCodePage;