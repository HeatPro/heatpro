import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export interface ValueIcon {
  icon: string;
  color?: string;
}

export interface Field {
  label: string;
  value?: string;
  valueIcon?: ValueIcon;
  icon: ValueIcon;
}

interface InterventionCardComponentProps {
  title: string;
  fields: Field[];
}

const InterventionCardComponent: React.FC<InterventionCardComponentProps> = ({ title, fields }) => {

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardTitleContainer}>
          <Text style={styles.cardTitle}>{title}</Text>
        </View>
        <View style={styles.cardInfoContainer}>
          {fields.map((field, index) => (
            <View style={styles.infoRow} key={index}>
              <Icon name={field.icon.icon} size={24} color={field.icon.color} style={styles.icon} />
              <Text style={styles.cardInfo}>{field.label}</Text>
              <View style={styles.dottedLine} />
              {field.valueIcon?.icon ? (
                <Icon
                  name={field.valueIcon?.icon}
                  size={20}
                  color={field.valueIcon?.color}
                />
              ) : (
                <Text style={styles.cardValue}>
                  {field.value}
                </Text>
              )}
            </View>
          ))}
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
    fontSize: 16,
    fontWeight: '500'
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
    marginHorizontal: 8
  },
  cardValue: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '500'
  },
  disconnectButton: {
    width: '90%',
    borderRadius: 40,
    backgroundColor: '#4E60AB'
  },
  disconnectButtonText: {
    fontSize: 22
  },
  icon: {
    marginRight: 12
  }
});

export default InterventionCardComponent;