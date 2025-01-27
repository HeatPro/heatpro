import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { CustomButton } from '@/components/ui/CustomButton';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function HomePageScreen({ navigation }) {

  const handleQRCodeScan = () => {
    console.log('QR Code scan pressed');
    navigation.navigate('ScanQRCode');
  };

  const handleQRCodeGeneration = () => {
    console.log('QR Code generation pressed');
    navigation.navigate('HistoriqueIntervention');
  };
  const handleLogOut = () => {
    console.log('Log out pressed');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Logo and Welcome Text */}
      <Image
        source={require('@/assets/images/logo.png')}
        style={styles.logo}
      />
      <Text style={[styles.title, styles.shadow]}>Bonjour Igor</Text>
      <Text style={[styles.subtitle, styles.shadow]}>Que souhaitez-vous faire ?</Text>

      <View style={styles.actionButtonsContainer}>

        <CustomButton
          title="Scanner un QR Code"
          onPress={handleQRCodeScan}
          style={styles.actionButton}
          textStyle={styles.actionButtonText}
        />

        <CustomButton
          title="Générer un QR Code"
          onPress={handleQRCodeGeneration}
          style={[styles.actionButton, styles.bottomActionButton]}
          textStyle={styles.actionButtonText}
        />
      </View>

      <View style={styles.bottomContainer}>
        <CustomButton
          title="Se déconnecter"
          onPress={handleLogOut}
          style={styles.bottomButton}
          textStyle={styles.bottomButtonText}
        />
        <MaterialIcons name="logout" size={16} color="#FFFFFF" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5C5DDC',
    alignItems: 'center',
    paddingTop: 180,
    paddingHorizontal: 20
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 40,
    fontWeight: 'bold'
  },
  actionButtonsContainer: {
    width: '90%',
    alignItems: 'center'
  },
  actionButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 40,
    shadowOffset: { width: 0, height: 3 },
    shadowColor: '#000000',
    shadowRadius: 12,
    shadowOpacity: 0.7,
    flex: 1,
    fontSize: 20,
    paddingVertical: 12,
    justifyContent: 'center'
  },
  bottomActionButton: {
    marginTop: 36
  },
  actionButtonText: {
    color: '#657DDF',
    fontSize: 20,
    fontWeight: '700'
  },
  shadow: {
    textShadowColor: '#000000',
    textShadowRadius: 24,
    textShadowOffset: { width: 0, height: 2 }
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomButton: {
    padding: 0,
    margin: 0,
    marginVertical: 0,
    backgroundColor: 'none',
    borderRadius: 0
  },
  bottomButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontStyle: 'italic',
    fontWeight: '600',
    lineHeight: 16
  }
});