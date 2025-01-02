import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { CustomInput } from '@/components/ui/CustomInput';
import { CustomButton } from '@/components/ui/CustomButton';

export default function LoginScreen() {
  const [machineName, setMachineName] = useState('');
  const [machineReference, setMachineReference] = useState('');
  const [machineAddress, setMachineAddress] = useState('');

  const handleGeneration = () => {
    console.log('Generate QR Code pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Générer un QR Code</Text>
      </View>
      <View style={styles.machineInfosContainer}>
        <CustomInput placeholder="Nom de la machine" icon="person-outline" onChangeText={setMachineName}
                     value={machineName} placeholderTextColor="#657DDF"
                     inputContainerStyle={styles.customInputContainer} style={styles.customInput} />
        <CustomInput placeholder="Référence de la machine" icon={'person-outline'} onChangeText={setMachineReference}
                     value={machineReference} placeholderTextColor="#657DDF"
                     inputContainerStyle={styles.customInputContainer} style={styles.customInput} />
        <CustomInput placeholder="Adresse de la machine" icon={'person-outline'} onChangeText={setMachineAddress}
                     value={machineAddress} placeholderTextColor="#657DDF"
                     inputContainerStyle={styles.customInputContainer} style={styles.customInput} />
      </View>
      <View style={styles.bottomContainer}>
        <CustomButton title="Générer le QR Code" onPress={handleGeneration}
                      style={styles.generateQRCodeButton}> </CustomButton>
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
  machineInfosContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    gap: 12
  },
  logo: {
    width: 48,
    height: 48
  },
  bottomContainer: {
    width: '80%',
    marginBottom: 16
  },
  generateQRCodeButton: {
    borderRadius: 40,
    fontWeight: 'bold',
    backgroundColor: '#4E60AB',
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#000000',
    shadowRadius: 5,
    shadowOpacity: 0.6
  },
  customInput: {},
  customInputContainer: {
    shadowOffset: { width: 0, height: 3 },
    shadowColor: '#000000',
    shadowRadius: 12,
    shadowOpacity: 0.4
  }
});