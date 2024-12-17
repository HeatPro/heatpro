import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { CustomInput } from '@/components/ui/CustomInput';
import { CustomButton } from '@/components/ui/CustomButton';
import { Checkbox } from '@/components/ui/Checkbox';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Handle login logic here
    console.log('Login pressed');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Logo and Welcome Text */}
      <Image
        source={require('@/assets/images/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Bienvenue</Text>
      <Text style={styles.subtitle}>Connectez-vous à votre compte</Text>

      {/* Input Fields */}
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

        {/* Remember Me and Forgot Password */}
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

        {/* Login Button */}
        <CustomButton
          title="Connexion"
          onPress={handleLogin}
        />
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
    marginBottom: 40,
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
});