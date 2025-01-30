import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import VerificationEditionContentCardComponent
  from '@/components/ui/HeatProComponents/edition-components/VerificationEditionContentComponent';

const VerificationEditionCardComponent = ({ title, verifications }) => {

  const [addedVerifications, setAddedVerifications] = useState<JSX.Element[]>([]);

  const [verificationsData, setVerificationsData] = useState<{
    [key: number]: {
      verification: string;
    };
  }>({});

  const handleVerificationDataChange = (id: number, data: { verification: string }) => {
    setVerificationsData((prev) => ({
      ...prev,
      [id]: data
    }));

    setAddedVerifications((prev) => {
      const totalComponents = prev.length;
      const isLastComponent = id === totalComponents;

      if (isLastComponent && data.verification.trim() !== '') {
        return returnNewVerificationCardComponent(prev, totalComponents + 1);
      }

      return prev;
    });
  };


  const returnNewVerificationCardComponent = (prev: any, newId: number) => {
    return [
      ...prev,
      <View key={newId} style={styles.infoRow}>
        <VerificationEditionContentCardComponent
          id={newId}
          onDataChange={(data) => handleVerificationDataChange(newId, data)}
          onDelete={() => handleDeleteVerification(newId)}
        />
      </View>
    ];
  };

  const handleDeleteVerification = (idToDelete: number) => {
    // Supprimer les données de la vérification
    setVerificationsData((prev) => {
      const newData = { ...prev };
      delete newData[idToDelete];
      return newData;
    });

    // Supprimer le composant visuel et réindexer les IDs
    setAddedVerifications((prev) => {
      return prev
        .filter((_, index) => index + 1 !== idToDelete) // +1 car l'index 0 est rendu séparément
        .map((component, newIndex) => {
          const newId = newIndex + 1;
          return (
            <View key={newId} style={styles.infoRow}>
              <VerificationEditionContentCardComponent
                id={newId}
                onDataChange={(data) => handleVerificationDataChange(newId, data)}
                onDelete={() => handleDeleteVerification(newId)}
              />
            </View>
          );
        });
    });
  };


  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardTitleContainer}>
          <Text style={styles.cardTitle}>{title ? title : 'Verifications effectuées'}</Text>
        </View>
        <View style={styles.cardInfoContainer}>
          <View key={0} style={styles.infoRow}>
            <VerificationEditionContentCardComponent
              id={0}
              onDataChange={(data) => handleVerificationDataChange(0, data)}
              onDelete={() => handleDeleteVerification(0)}
            ></VerificationEditionContentCardComponent>
          </View>
          {addedVerifications}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center'
    //backgroundColor: '#F4F5F8'
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
    marginVertical: 8,

    // Ombre pour Android
    elevation: 3,

    // Ombre pour iOS
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.18,
    shadowRadius: 4
  },
  cardTitleContainer: {
    marginBottom: 12
  },
  cardTitle: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '600'
  },
  cardInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  cardInfo: {
    color: '#454343',
    fontSize: 16,
    fontWeight: '500'
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },
  cardValue: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '500'
  },
  icon: {
    marginRight: 12
  },
  emptyMessage: {
    color: '#454343',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    width: '100%'
  }
});

export default VerificationEditionCardComponent;