import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Alert, TouchableOpacity, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as LocalAuthentication from 'expo-local-authentication';
import { CustomInput } from '@/components/ui/CustomInput';
import { CustomButton } from '@/components/ui/CustomButton';
import { Checkbox } from '@/components/ui/Checkbox';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isBiometricEnabled, setIsBiometricEnabled] = useState(false);
  const [biometricType, setBiometricType] = useState<LocalAuthentication.AuthenticationType | null>(null);

  // Check biometric support and type
  useEffect(() => {
    checkBiometricSupport();
  }, []);

  const checkBiometricSupport = async () => {
    try {
      // Check if hardware supports biometrics
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);

      if (compatible) {
        // Check if biometrics are enrolled
        const enrolled = await LocalAuthentication.isEnrolledAsync();
        setIsBiometricEnabled(enrolled);

        // Get available biometric types
        const types = await LocalAuthentication.supportedAuthenticationTypesAsync();

        // Check if Face ID is available (type 2 is Face ID)
        if (types.includes(LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION)) {
          setBiometricType(LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION);
        } else if (types.includes(LocalAuthentication.AuthenticationType.FINGERPRINT)) {
          setBiometricType(LocalAuthentication.AuthenticationType.FINGERPRINT);
        }

        console.log('Biometric type:', types);
      }
    } catch (error) {
      console.error('Error checking biometric support:', error);
    }
  };

  const handleBiometricAuth = async () => {
    try {
      // Check if biometrics are still available
      const available = await LocalAuthentication.getEnrolledLevelAsync();
      if (!available) {
        Alert.alert(
          'Non disponible',
          'L\'authentification biométrique n\'est pas disponible',
          [{ text: 'OK' }]
        );
        return;
      }

      // Attempt authentication
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Connexion avec ' + (biometricType === LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION ? 'Face ID' : 'Touch ID'),
        fallbackLabel: 'Utiliser le mot de passe',
        disableDeviceFallback: false,
        cancelLabel: 'Annuler'
      });

      console.log('Authentication result:', result);

      if (result.success) {
        console.log('Biometric authentication successful');
        Alert.alert(
          'Succès',
          'Authentification biométrique réussie',
          [{ text: 'OK', onPress: () => handleSuccessfulBiometricAuth() }]
        );
      } else if (result.error) {
        console.log('Authentication error:', result.error);
      }
    } catch (error) {
      console.error('Biometric authentication error:', error);
      Alert.alert(
        'Erreur',
        'Échec de l\'authentification biométrique',
        [{ text: 'OK' }]
      );
    }
  };

  const handleSuccessfulBiometricAuth = () => {
    console.log('Processing successful biometric auth');
  };

  const handleLogin = async () => {
    try {
      console.log('[DEBUG] username:', username);
      console.log('[DEBUG] password:', password);
      const response = await fetch('http://localhost:3000/auth/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      console.log('[DEBUG] username:', username);
      console.log('[DEBUG] password:', password);

      const data = await response.json();
      console.log('[DEBUG] Response:', data);

      // Check if we have an access_token in the response
      if (data.access_token) {
        console.log('[DEBUG] Token received');
        Alert.alert(
          'Succès',
          'Connexion réussie',
          [
            { text: 'OK', onPress: () => console.log('OK Pressed') }
          ]
        );
      } else {
        Alert.alert(
          'Erreur',
          'Identifiants invalides',
          [
            { text: 'OK', onPress: () => console.log('Error OK Pressed') }
          ]
        );
      }

    } catch (error) {
      console.error('[DEBUG] Login error:', error);
      Alert.alert(
        'Erreur',
        'Une erreur est survenue lors de la connexion',
        [
          { text: 'OK', onPress: () => console.log('Error OK Pressed') }
        ]
      );
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Image
        source={require('@/assets/images/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Bienvenue</Text>
      <Text style={styles.subtitle}>Connectez-vous à votre compte</Text>

      <View style={styles.formContainer}>
        <CustomInput
          placeholder="Nom d'utilisateur"
          icon="person-outline"
          onChangeText={setUsername}
          value={username}
        />
        <CustomInput
          placeholder="Mot de passe"
          icon="lock-closed-outline"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />

        <View style={styles.optionsContainer}>
          <Checkbox
            checked={rememberMe}
            onPress={() => setRememberMe(!rememberMe)}
            label="Se souvenir de moi"
          />
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>
          </TouchableOpacity>
        </View>

        <CustomButton
          title="Connexion"
          onPress={handleLogin}
        />

        {isBiometricSupported && isBiometricEnabled && (
        <View style={styles.separator} />
        )}

        {isBiometricSupported && isBiometricEnabled && (
          <TouchableOpacity
            style={styles.biometricButton}
            onPress={handleBiometricAuth}
          >
            <Ionicons
              name={biometricType === LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION ? "scan-outline" : "ios-finger-print"}
              size={24}
              color="#FFFFFF"
            />
            <Text style={styles.biometricText}>
              {biometricType === LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION
                ? 'Utiliser Face ID'
                : 'Utiliser Touch ID'}
            </Text>
          </TouchableOpacity>
        )}
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
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 30,
    fontWeight: 'bold',
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
  },
  optionsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  forgotPassword: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginVertical: 20,
  },
  biometricButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: 15,
    borderRadius: 10,
    width: '100%',
  },
  biometricText: {
    color: '#FFFFFF',
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

