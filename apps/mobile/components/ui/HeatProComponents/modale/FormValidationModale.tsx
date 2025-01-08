import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CustomButton } from '@/components/ui/CustomButton';

export interface ModaleButtonProp {
  text: string;
  textColor?: string;
  buttonBackgroundColor?: string;
}

interface FormValidationModaleComponentProps {
  title: string;
  description: string;
  leftButton: ModaleButtonProp;
  rightButton: ModaleButtonProp;
}

const onPress = () => {

};

const onPress2 = () => {

};

const FormValidationModaleComponent: React.FC<FormValidationModaleComponentProps> = ({
                                                                                       title,
                                                                                       description,
                                                                                       leftButton,
                                                                                       rightButton
                                                                                     }) => {

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View>
          <View style={styles.cardTitleContainer}>
            <Text style={styles.cardTitle}>{title}</Text>
          </View>
          <View style={styles.cardDescription}>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>
        <View style={styles.actionButtons}>
          <CustomButton title={leftButton.text} onPress={onPress}
                        style={[styles.button, leftButton.buttonBackgroundColor
                          ? { backgroundColor: leftButton.buttonBackgroundColor }
                          : { backgroundColor: '#F69091' }]}
                        textStyle={leftButton.textColor
                          ? { color: leftButton.textColor }
                          : { color: '#FFFFFF' }}>
          </CustomButton>
          <CustomButton title={rightButton.text} onPress={onPress2}
                        style={rightButton.buttonBackgroundColor
                          ? { backgroundColor: rightButton.buttonBackgroundColor }
                          : { backgroundColor: '#7AD890' }}
                        textStyle={rightButton.textColor
                          ? { color: rightButton.textColor }
                          : { color: '#FFFFFF' }}>
          </CustomButton>
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
  cardDescription: {
    width: '100%'
  },
  description: {
    color: '#454343',
    fontWeight: 500,
    fontSize: 14
  },
  actionButtons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%'
  },
  button: {
    borderRadius: 40,
    padding: 8
  }
});

export default FormValidationModaleComponent;