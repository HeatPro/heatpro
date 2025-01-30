import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CustomInput } from '@/components/ui/CustomInput';
import * as ImagePicker from 'expo-image-picker';

interface PartsCardContentComponentProps {
  onDataChange: (data: {
    name: string;
    reference: string;
    file: ImagePicker.ImagePickerAsset | null;
  }) => void;
  id: number;
}

const PartsCardContentComponent: React.FC<PartsCardContentComponentProps> = ({ onDataChange, id }) => {
  const [name, setName] = React.useState('');
  const [reference, setReference] = React.useState('');
  const [file, setFile] = React.useState<ImagePicker.ImagePickerAsset | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    onDataChange({
      name,
      reference,
      file
    });
  }, [name, reference, file]);

  const onPartNameChanged = (name: string) => {
    setName(name);
  };

  const onPartReferenceChanged = (reference: string) => {
    setReference(reference);
  };

  const pickImage = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert(
          'Permission Denied',
          'Sorry, we need camera roll permission to upload images.'
        );
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1
      });

      if (!result.canceled && result.assets.length === 1) {
        setFile(result.assets[0]);
        setError(null);
      }
    } catch (err) {
      setError('Failed to pick image');
      console.error('Error picking image:', err);
    }
  };

  return (
    <>
      <TouchableOpacity
        onPress={pickImage}
        style={[styles.imagePicker]}
      >
        {file ? (
          <Image
            source={{ uri: file.uri }}
            style={styles.image}
            accessible={true}
            accessibilityLabel="Selected part image"
          />
        ) : (
          <Icon
            name="add-a-photo"
            size={48}
            color="#4A90E2"
            style={styles.image}
          />
        )}
      </TouchableOpacity>
      <View style={styles.partInfos}>
        <CustomInput
          style={styles.cardInfo}
          placeholder="Nom de la pièce"
          icon="mic"
          placeholderColor="#45434354"
          containerStyle={styles.inputContainer}
          focusedStyle={styles.focusedStyle}
          iconStyle={styles.iconStyle}
          onChangeText={onPartNameChanged}
          value={name}
        />
        <CustomInput
          style={styles.cardInfo}
          placeholder="Référence de la pièce"
          icon="mic"
          placeholderColor="#45434354"
          containerStyle={styles.inputContainer}
          focusedStyle={styles.focusedStyle}
          iconStyle={styles.iconStyle}
          onChangeText={onPartReferenceChanged}
          value={reference}
        />
      </View>
      {error && (
        <Text style={styles.errorText}>{error}</Text>
      )}
    </>);
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
  inputContainer: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#00000012'
  },
  partInfos: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    marginLeft: 12
  },
  icon: {
    marginRight: 12
  },
  iconStyle: {
    marginRight: 6
  },
  focusedStyle: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000000'
  },
  imagePicker: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#F5F5F5',
    width: 50,
    height: 50,
    minWidth: 50,
    maxWidth: 120,
    minHeight: 50,
    maxHeight: 120
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  errorText: {
    color: '#FF0000',
    fontSize: 12,
    marginTop: 4
  }
});

export default PartsCardContentComponent;