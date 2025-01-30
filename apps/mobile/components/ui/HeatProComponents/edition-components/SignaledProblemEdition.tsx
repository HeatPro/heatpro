import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Problem } from '@/components/ui/HeatProComponents/SignaledProblemCard';

export enum ProblemStatus {
  RESOLVED = 'Résolu',
  UNRESOLVED = 'Non-résolu'
}

interface Action {
  id: string;
  text: string;
}

interface ProblemTrackingCardProps {
  problem: Problem;
  onAddAction?: (action: string) => void;
  onDeleteAction?: (id: string) => void;
  onUpdateStatus?: (status: ProblemStatus) => void;
}

const ProblemTrackingCard: React.FC<ProblemTrackingCardProps> = ({
                                                                   problem,
                                                                   onAddAction,
                                                                   onDeleteAction,
                                                                   onUpdateStatus
                                                                 }) => {
  const [newAction, setNewAction] = useState('');
  const [isStatusDropdownVisible, setStatusDropdownVisible] = useState(false);

  const handleAddAction = () => {
    if (newAction.trim()) {
      onAddAction(newAction);
      setNewAction('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Problème signalé</Text>
        <View style={styles.statusSection}>
          <Text style={styles.statusLabel}>Statut :</Text>
          <TouchableOpacity
            style={styles.statusButton}
            onPress={() => setStatusDropdownVisible(!isStatusDropdownVisible)}
          >
            <Text style={[
              styles.statusText,
              { color: problem.status === ProblemStatus.RESOLVED ? '#4ff555' : '#F69091' }
            ]}>
              {problem.status}
            </Text>
            <Icon
              name="chevron-down"
              size={20}
              color="#757575"
            />
          </TouchableOpacity>
        </View>
      </View>

      {isStatusDropdownVisible && (
        <View style={styles.dropdown}>
          {Object.values(ProblemStatus).map((status) => (
            <TouchableOpacity
              key={status}
              style={styles.dropdownItem}
              onPress={() => {
                onUpdateStatus(status);
                setStatusDropdownVisible(false);
              }}
            >
              <Text style={[
                styles.dropdownText,
                { color: status === ProblemStatus.RESOLVED ? '#4ff555' : '#F69091' }
              ]}>
                {status}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.descriptionText}>{problem.description}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Actions réalisées</Text>
        {problem.actions.map((action) => (
          <View key={action.id} style={styles.actionItem}>
            <Icon name="circle" size={20} color="#E0E0E0" style={styles.actionBullet} />
            <Text style={styles.actionText}>{action.text}</Text>
            <TouchableOpacity
              onPress={() => onDeleteAction(action.id)}
              style={styles.deleteButton}
            >
              <Icon name="trash-can-outline" size={20} color="#FF6B6B" />
            </TouchableOpacity>
          </View>
        ))}
        <View style={styles.newActionContainer}>
          <Icon name="circle" size={20} color="#E0E0E0" style={styles.actionBullet} />
          <TextInput
            style={styles.newActionInput}
            placeholder="Nouvelle action"
            placeholderTextColor="#9D9D9D"
            value={newAction}
            onChangeText={setNewAction}
            onSubmitEditing={handleAddAction}
          />
          <TouchableOpacity onPress={handleAddAction}>
            <Icon name="microphone" size={20} color="#757575" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    margin: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
  },
  statusSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusLabel: {
    fontSize: 16,
    color: '#757575',
    marginRight: 8,
  },
  statusButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 8,
    borderRadius: 4,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '500',
    marginRight: 4,
  },
  dropdown: {
    position: 'absolute',
    top: 60,
    right: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    zIndex: 1000,
  },
  dropdownItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  dropdownText: {
    fontSize: 14,
    fontWeight: '500',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 12,
  },
  descriptionText: {
    fontSize: 16,
    color: '#454343',
    backgroundColor: '#F5F5F5',
    padding: 12,
    borderRadius: 4,
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: '#F5F5F5',
    padding: 12,
    borderRadius: 4,
  },
  actionBullet: {
    marginRight: 8,
  },
  actionText: {
    flex: 1,
    fontSize: 16,
    color: '#454343',
  },
  deleteButton: {
    padding: 4,
  },
  newActionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 12,
    borderRadius: 4,
  },
  newActionInput: {
    flex: 1,
    fontSize: 16,
    color: '#454343',
    marginRight: 8,
  },
});

export default ProblemTrackingCard;