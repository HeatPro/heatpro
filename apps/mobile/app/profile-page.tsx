import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CustomButton } from '@/components/ui/CustomButton';
import { router } from 'expo-router';

const ProfilePage = () => {

  const handleLogin = () => {
    console.log('Se deconnecter pressed');
    router.push("/login")
  };

  const handleARQRCode = () => {
    console.log('AR Glasses QR Code pressed');
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}>Profil</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.cardTitleContainer}>
          <Text style={styles.cardTitle}>Informations générales</Text>
        </View>
        <View style={styles.cardInfoContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.cardInfo}>Prénom</Text>
            <View style={styles.dottedLine} />
            <Text style={styles.cardValue}>Jean</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.cardInfo}>Nom</Text>
            <View style={styles.dottedLine} />
            <Text style={styles.cardValue}>Dupont</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.cardInfo}>Numéro de téléphone</Text>
            <View style={styles.dottedLine} />
            <Text style={styles.cardValue}>06 12 34 56 78</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.cardInfo}>Dernière intervention</Text>
            <View style={styles.dottedLine} />
            <Text style={styles.cardValue}>Jeudi 28 Sept. 2024</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardTitleContainer}>
          <Text style={styles.cardTitle}>Lunettes de Réalité Augmentée</Text>
        </View>
        <View style={styles.cardInfoContainer}>
          <TouchableOpacity onPress={handleARQRCode}>
            <Text style={styles.cardInfo}>QR Code de connexion</Text>
          </TouchableOpacity>

        </View>
      </View>

      <CustomButton
        title="Se déconnecter"
        onPress={handleLogin}
        style={styles.disconnectButton}
        textStyle={styles.disconnectButtonText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  header: {
    height: '18%',
    backgroundColor: '#657DDF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4, // Pour Android
    shadowColor: '#000', // Pour iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    width: '100%'
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    textShadowColor: 'rgba(0,0,0,0.27)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '90%',
    padding: 16,
    marginVertical: 16,

    // Ombre pour Android
    elevation: 3,

    // Ombre pour iOS
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
  },
  cardTitleContainer: {
    marginBottom: 12,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '600'
  },
  cardInfoContainer:{
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  cardInfo: {
    color: '#454343',
    fontSize: 16,
    fontWeight: '500',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },
  dottedLine: {
    flex: 1, // Prend tout l'espace entre le label et la donnée
    borderBottomWidth: 2,
    borderColor: '#cbc3c3',
    borderStyle: 'dotted',
    marginHorizontal: 8,
  },
  cardValue: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '500',
  },
  disconnectButton: {
    width: '90%',
    borderRadius: 40,
    backgroundColor: '#4E60AB',
  },
  disconnectButtonText: {
    fontSize: 22
  }
});

export default ProfilePage;