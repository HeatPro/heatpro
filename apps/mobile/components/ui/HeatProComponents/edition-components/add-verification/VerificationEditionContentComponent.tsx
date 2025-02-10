import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CustomInput } from '@/components/ui/CustomInput';

interface VerificationEditionContentCardComponentProps {
  field?: string,
  onDataChange: (data: {
    verification: string;
  }) => void;
  onDelete: () => void;
  id: number;
}

const VerificationEditionContentCardComponent: React.FC<VerificationEditionContentCardComponentProps> = ({
                                                                                                           field,
                                                                                                           onDataChange,
                                                                                                           onDelete,
                                                                                                           id
                                                                                                         }) => {

  const [verification, setVerification] = React.useState('');

  const onVerificationChanged = (verification: string) => {
    setVerification(verification);
  };

  const handleIconPress = () => {
    if (verification.length > 0) {
      setVerification('');
    } else {
      // TODO : fonctionnalité microphone
    }
  };

  React.useEffect(() => {
    onDataChange({
      verification
    });
  }, [verification]);

  return (
    <>
      <Icon name="check-circle" size={24} color="#4ff555" style={styles.icon} />
      <CustomInput
        style={styles.cardInfo}
        placeholder="Nouvelle vérification"
        icon={verification.length > 0 ? 'trash' : 'mic'}
        placeholderColor="#45434354"
        containerStyle={styles.inputContainer}
        focusedStyle={styles.focusedStyle}
        iconStyle={styles.iconStyle}
        onChangeText={onVerificationChanged}
        onIconPress={handleIconPress}
        value={verification}
      />
      <Icon name="delete" size={24} color="#ff4444" style={styles.icon} onPress={onDelete} />
    </>
  );
};

const styles = StyleSheet.create({
  cardInfo: {
    color: '#000000',
    fontSize: 12,
    fontWeight: '500',
    fontStyle: 'italic',
    width: '100%',
    padding: 6
  },
  icon: {
    marginRight: 12
  },
  inputContainer: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#00000012',
    flex: 1
  },
  focusedStyle: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000000'
  },
  iconStyle: {
    marginRight: 6
  }
});

export default VerificationEditionContentCardComponent;