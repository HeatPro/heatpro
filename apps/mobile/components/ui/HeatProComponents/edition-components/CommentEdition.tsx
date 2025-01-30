import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CustomInput } from '@/components/ui/CustomInput';

const CommentEditionCardComponent = ({ title }) => {

  const [comment, setComment] = React.useState('');

  const onCommentChanged = (comment: string) => {
    setComment(comment);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardTitleContainer}>
          <Text style={styles.cardTitle}>{title}</Text>
        </View>
        <View style={styles.cardInfoContainer}>
          <CustomInput
            style={styles.cardInfo}
            placeholder="Votre commentaire"
            icon="mic"
            placeholderColor="#45434354"
            containerStyle={styles.inputContainer}
            focusedStyle={styles.focusedStyle}
            iconStyle={styles.iconStyle}
            onChangeText={onCommentChanged}
            value={comment}></CustomInput>
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
  inputContainer: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#00000012'
  },
  focusedStyle: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000000'
  },
  iconStyle: {
    marginRight: 6
  },
  cardInfo: {
    color: '#000000',
    fontSize: 12,
    fontWeight: '500',
    fontStyle: 'italic',
    width: '100%',
    padding: 6
  },
});

export default CommentEditionCardComponent;