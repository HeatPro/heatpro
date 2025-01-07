import React, { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export enum ProblemStatus {
  UNRESOLVED = 'Non-résolu',
  ON_GOING = 'En cours',
  RESOLVED = 'Résolu'
}

// Configuration des icônes par statut
const statusIcons = {
  [ProblemStatus.UNRESOLVED]: {
    name: 'close-circle',
    color: '#F69091'
  },
  [ProblemStatus.ON_GOING]: {
    name: 'wave',
    color: '#F6B490'
  },
  [ProblemStatus.RESOLVED]: {
    name: 'check-circle',
    color: '#4ff555'
  }
};

export interface Problem {
  description: string;
  actions: string;
  status: ProblemStatus;
}

interface SignaledProblemCardProps {
  problems: Problem[];
  width?: number;
}

const SignaledProblemCard: React.FC<SignaledProblemCardProps> = ({ problems, width }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const screenWidth = Dimensions.get('window').width;
  const cardWidth = width || screenWidth * 0.9;

  const handleScroll = (event) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / cardWidth);
    setActiveIndex(index);
  };

  return (
    <View style={[styles.signaledProblemContainer, { width: cardWidth }]}>
      <View style={styles.headerContainer}>
        <Text style={styles.signaledProblemTitle}>Problème signalé</Text>
        <View style={styles.statusContainer}>
          <View style={[
            styles.statusBadge,
            {
              backgroundColor: problems[activeIndex].status === ProblemStatus.UNRESOLVED ? '#FFEBEB' :
                problems[activeIndex].status === ProblemStatus.ON_GOING ? '#FFF4EB' : '#EBFFED'
            }
          ]}>
            <Text style={[
              styles.statusText,
              {
                color: problems[activeIndex].status === ProblemStatus.UNRESOLVED ? '#F69091' :
                  problems[activeIndex].status === ProblemStatus.ON_GOING ? '#F6B490' : '#4ff555'
              }
            ]}>{problems[activeIndex].status}</Text>
            <Icon
              name={statusIcons[problems[activeIndex].status].name}
              size={20}
              color={statusIcons[problems[activeIndex].status].color}
              style={styles.statusIcon}
            />
          </View>
        </View>
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
            { width: (cardWidth) * problems.length }
          ]}
        >
          {problems.map((problem, index) => (
            <View key={index} style={[styles.problemContent, { width: cardWidth }]}>
              <View style={styles.signaledProblemContent}>
                <Text style={styles.signaledProblemContentCommonTextProps}>Description</Text>
                <Text style={[styles.signaledProblemContentText, styles.signaledProblemContentCommonTextProps]}>
                  {problem.description}
                </Text>
              </View>
              <View style={styles.signaledProblemContent}>
                <Text style={styles.signaledProblemContentCommonTextProps}>Actions réalisées</Text>
                <Text style={[styles.signaledProblemContentText, styles.signaledProblemContentCommonTextProps]}>
                  {problem.actions}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.paginationContainer}>
        {problems.map((_, index) => (
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
  );
};

const styles = StyleSheet.create({
  signaledProblemContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginVertical: 16,
    paddingVertical: 16,
    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    overflow: 'hidden'
  },
  scrollViewContainer: {
    width: '100%',
    overflow: 'hidden'
  },
  scrollViewContent: {
    flexDirection: 'row',
    width: '100%'
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
    paddingHorizontal: 16
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500'
  },
  statusIcon: {
    marginLeft: 8
  },
  problemContent: {
    paddingHorizontal: 16,
    flex: 1,
    overflow: 'hidden'
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
  signaledProblemTitle: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '600'
  },
  signaledProblemContentCommonTextProps: {
    color: '#454343',
    fontWeight: '500'
  },
  signaledProblemContentText: {
    marginLeft: 12,
    marginTop: 4
  },
  signaledProblemContent: {
    marginTop: 16
  }
});

export default SignaledProblemCard;