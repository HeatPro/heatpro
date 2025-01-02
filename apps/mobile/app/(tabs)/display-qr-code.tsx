// QRCodeScreen.js
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { CustomButton } from '@/components/ui/CustomButton';

export default function QRCodeScreen({ route, navigation }) {
  const { machineData } = route.params;
  const qrValue = `/${machineData.name}/${machineData.reference}/${machineData.address}`;

  const handlePrint = () => {
    console.log('Print QR Code pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>QR Code</Text>
      </View>
      <View style={styles.qrInfosContainer}>
        <View style={styles.qrContainer}>
          <QRCode
            value={qrValue}
            size={225}
          />
        </View>

        <View style={styles.machineInfos}>
          <Text style={styles.machineInfosText}>Machine : {machineData.name}</Text>
          <Text style={styles.machineInfosText}>Réference : {machineData.reference}</Text>
          <Text style={styles.machineInfosText}>Adresse : {machineData.address}</Text>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <CustomButton title="Imprimer le QR Code" onPress={handlePrint}
                      style={styles.printQrCodeButton}> </CustomButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    flex: 1,
    backgroundColor: '#657DDF'
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 34,
    gap: 12
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  logo: {
    width: 48,
    height: 48
  },
  qrInfosContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 28
  },
  qrContainer: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 10
  },
  backButton: {
    borderRadius: 40,
    backgroundColor: '#4E60AB',
    width: '80%',
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#000000',
    shadowRadius: 5,
    shadowOpacity: 0.6
  },
  machineInfos: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  machineInfosText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontStyle: 'italic'
  },
  bottomContainer: {
    width: '80%',
    marginBottom: 16
  },
  printQrCodeButton: {
    borderRadius: 40,
    fontWeight: 'bold',
    backgroundColor: '#4E60AB',
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#000000',
    shadowRadius: 5,
    shadowOpacity: 0.6
  }
});