import React, { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface AssociatedMediaCardProps {
  title: string;
  media: { icon: string; color?: string }[];
  width?: number;
}

const AssociatedMediaCardComponent: React.FC<AssociatedMediaCardProps> = ({ title, media, width }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const screenWidth = Dimensions.get('window').width;
  const cardWidth = width || screenWidth * 0.9;

  const handleScroll = (event) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / cardWidth);
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.card, { width: cardWidth }]}>
        <View style={styles.cardTitleContainer}>
          <Text style={styles.cardTitle}>{title}</Text>
        </View>
        <View style={styles.scrollViewContainer}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            contentContainerStyle={[
              styles.scrollViewContent,
              { width: cardWidth * media.length }
            ]}
          >
            {media.map((item, index) => (
              <View key={index} style={[styles.cardInfoContainer, { width: cardWidth }]}>
                <Icon name={item} size={128} />
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.paginationContainer}>
          {media.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                { backgroundColor: index === activeIndex ? '#657DDF' : '#E8E8E8' }
              ]}
            />
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
    justifyContent: 'center',
    alignItems: 'center',
    height: 200 // Ajustez la hauteur selon vos besoins
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    width: '100%'
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4
  },
  scrollViewContainer: {
    width: '100%',
    overflow: 'hidden'
  },
  scrollViewContent: {
    flexDirection: 'row',
    width: '100%'
  }
});

export default AssociatedMediaCardComponent;
