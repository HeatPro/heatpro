import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddPartCardContentComponent
  from '@/components/ui/HeatProComponents/edition-components/add-part-card/addPartCardContentComponent';
import { CustomButton } from '@/components/ui/CustomButton';
import * as ImagePicker from 'expo-image-picker';

interface AddPartsCardComponentProps {
  title: string;
}

const PartsCardComponent: React.FC<AddPartsCardComponentProps> = ({ title }) => {

  const [addedParts, setAddedParts] = useState<JSX.Element[]>([]);
  const [partsData, setPartsData] = useState<{
    [key: number]: {
      name: string;
      reference: string;
      file: ImagePicker.ImagePickerAsset | null;
    };
  }>({});

  const handlePartDataChange = (id: number, data: {
    name: string;
    reference: string;
    file: ImagePicker.ImagePickerAsset | null;
  }) => {
    setPartsData(prev => ({
      ...prev,
      [id]: data
    }));
  };

  const addPartCardComponent = () => {
    const newId = addedParts.length + 1;
    setAddedParts([...addedParts,
      <View key={newId} style={styles.infoRow}>
        <AddPartCardContentComponent
          id={newId}
          onDataChange={(data) => handlePartDataChange(newId, data)}
        />
      </View>
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardTitleContainer}>
          <Text style={styles.cardTitle}>{title}</Text>
        </View>
        <View style={styles.cardInfoContainer}>
          <View style={styles.infoRow}>
            <AddPartCardContentComponent
              id={0}
              onDataChange={(data) => handlePartDataChange(0, data)}
            />
          </View>
          {addedParts}
        </View>
        <CustomButton title="Ajouter une pièce +" onPress={addPartCardComponent}
                      style={styles.addPartContentButton}
                      textStyle={styles.addPartContentButtonText}></CustomButton>
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
    elevation: 3,
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
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    width: '100%'
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
  },
  addPartContentButton: {
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#657DDF'
  },
  addPartContentButtonText: {
    fontSize: 10,
    fontWeight: 700
  }
});

export default PartsCardComponent;