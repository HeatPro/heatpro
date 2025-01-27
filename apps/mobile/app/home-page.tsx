import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { CustomButton } from '@/components/ui/CustomButton';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';

export default function HomePageScreen() {

  const handleQRCodeScan = () => {
    console.log('QR Code scan pressed');
    router.push("/scanner")
  };

  const handleQRCodeGeneration = () => {
    console.log('QR Code generation pressed');
  };
  const handleLogOut = () => {
    router.push("/login")
    console.log('Log out pressed');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Logo and Welcome Text */}
      <Image
        source={require('@/assets/images/logo.png')}
        style={styles.logo}
      />
      <Text style={[styles.title, styles.shadow]}>Bonjour Jean</Text>
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
          style={styles.actionButton}
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
    width: '100%',
    alignItems: 'center'
  },
  actionButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 40,
    shadowOffset: { width: 0, height: 3},
    shadowColor: '#000000',
    shadowRadius: 12,
    shadowOpacity: 0.7
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