import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CommentCardComponent = ({ title, comment, ifEmptyMessage }) => {

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardTitleContainer}>
          <Text style={styles.cardTitle}>{title}</Text>
        </View>
        <View style={styles.cardInfoContainer}>
          {comment ? <Text style={styles.comment}>{comment}</Text> :
            <Text style={styles.emptyMessage}>{ifEmptyMessage ? ifEmptyMessage : 'Aucun commentaire'}</Text>
          }

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
  comment: {
    flexWrap: 'wrap'
  },
  emptyMessage: {
    color: '#454343',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    width: '100%'
  }
});

export default CommentCardComponent;