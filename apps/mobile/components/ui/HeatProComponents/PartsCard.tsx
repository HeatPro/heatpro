import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export interface Part {
  img?: string;
  name: string;
  ref: string;
}

interface PartsCardComponentProps {
  title: string;
  parts: Part[];
  IfEmptyMessage: string;
}

const PartsCardComponent: React.FC<PartsCardComponentProps> = ({ title, parts, IfEmptyMessage }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardTitleContainer}>
          <Text style={styles.cardTitle}>{title}</Text>
        </View>
        <View style={styles.cardInfoContainer}>
          {parts.length === 0 ? (
            <Text style={styles.emptyMessage}>{IfEmptyMessage}</Text>
          ) : (
            parts.map((field, index) => (
              <View style={styles.infoRow} key={index}>
                <Icon name="check-circle" size={48} color="#4ff555" style={styles.icon} />
                <View style={styles.partInfos}>
                  <Text style={[styles.cardInfo, styles.cardInfoMargin]}>{field.name}</Text>
                  <Text style={styles.cardInfo}>RÉF : {field.ref}</Text>
                </View>
              </View>
            ))
          )}
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
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
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
    shadowRadius: 12
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
    fontSize: 12,
    fontWeight: '500'
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },
  partInfos: {
    display: 'flex',
    flexDirection: 'column'
  },
  cardInfoMargin: {
    marginBottom: 4
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

export default PartsCardComponent;