import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CustomButton } from '@/components/ui/CustomButton';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';

interface MediaEditionComponentProps {
  title: string;
}

interface MediaItem {
  id: number;
  file: ImagePicker.ImagePickerAsset | null;
}

const MediaEditionComponent: React.FC<MediaEditionComponentProps> = ({ title }) => {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([{ id: 0, file: null }]);

  const pickImage = async (id: number) => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setMediaItems(prevItems =>
        prevItems.map(item =>
          item.id === id ? { ...item, file: result.assets[0] } : item
        )
      );
    }
  };

  const addNewImageField = () => {
    const newId = Math.max(...mediaItems.map(item => item.id)) + 1;
    setMediaItems([...mediaItems, { id: newId, file: null }]);
  };

  const removeImage = (id: number) => {
    if (mediaItems.length > 1) {
      setMediaItems(prevItems => prevItems.filter(item => item.id !== id));
    } else {
      // If it's the last item, just clear the image
      setMediaItems(prevItems =>
        prevItems.map(item =>
          item.id === id ? { ...item, file: null } : item
        )
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardTitleContainer}>
          <Text style={styles.cardTitle}>{title}</Text>
        </View>

        <View style={styles.cardInfoContainer}>
          {mediaItems.map((item) => (
            <View key={item.id} style={styles.mediaItemContainer}>
              <TouchableOpacity
                style={[styles.imagePicker, item.file && styles.imagePickerWithImage]}
                onPress={() => pickImage(item.id)}
              >
                {item.file ? (
                  <View style={styles.imageContainer}>
                    <Image
                      source={{ uri: item.file.uri }}
                      style={styles.image}
                    />
                    <TouchableOpacity
                      style={styles.removeButton}
                      onPress={() => removeImage(item.id)}
                    >
                      <Ionicons name="close-circle" size={24} color="white" />
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={styles.placeholderContainer}>
                    <Ionicons name="camera" size={24} color="#657DDF" />
                    <Text style={styles.placeholderText}>Ajouter une image</Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <CustomButton
          title="Ajouter une image +"
          onPress={addNewImageField}
          style={styles.addPartContentButton}
          textStyle={styles.addPartContentButtonText}
        />
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
    width: '100%',
    gap: 12
  },
  mediaItemContainer: {
    width: '100%',
    marginBottom: 12
  },
  imagePicker: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#657DDF',
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    height: 200,
    overflow: 'hidden'
  },
  imagePickerWithImage: {
    borderStyle: 'solid'
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  removeButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 12,
    padding: 4
  },
  placeholderContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  placeholderText: {
    marginTop: 8,
    color: '#657DDF',
    fontSize: 14
  },
  addPartContentButton: {
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#657DDF',
    marginTop: 12
  },
  addPartContentButtonText: {
    fontSize: 10,
    fontWeight: '700'
  }
});

export default MediaEditionComponent;