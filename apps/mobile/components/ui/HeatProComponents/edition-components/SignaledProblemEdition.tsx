import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CustomInput } from '@/components/ui/CustomInput';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface ProblemEditionComponentProps {
  title: string;
}

const ProblemReport: React.FC<ProblemEditionComponentProps> = ({ title }) => {
  const [status, setStatus] = useState('Résolu');
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [description, setDescription] = useState('');
  const [newAction, setNewAction] = useState('');

  const toggleStatus = () => {
    setShowStatusDropdown(!showStatusDropdown);
  };

  const selectStatus = (newStatus) => {
    setStatus(newStatus);
    setShowStatusDropdown(false);
  };

  const deleteAction = (index) => {
    const newActions = actions.filter((_, i) => i !== index);
    setActions(newActions);
  };

  const onDescriptionChanged = (description: string) => {
    setDescription(description);
  };

  const handleIconPress = () => {
    if (description.length > 0) {
      setDescription('');
    } else {
      // TODO : fonctionnalité microphone
    }
  };

  const [actions, setActions] = useState<{ id: number; action: string }[]>([{ id: 0, action: '' }]);

  const handleActionChange = (id: number, newAction: string) => {
    setActions((prevActions) => {
      let updatedActions = prevActions.map((item) =>
        item.id === id ? { ...item, action: newAction } : item
      );

      // Ajouter un nouveau champ s'il n'existe pas déjà et si l'on tape dans le dernier champ
      if (id === prevActions.length - 1 && newAction.length > 0) {
        updatedActions = [...updatedActions, { id: prevActions.length, action: '' }];
      }

      // Supprimer le champ suivant si le champ courant est vidé
      if (newAction.length === 0) {
        const nextAction = updatedActions[id + 1];
        if (nextAction && nextAction.action.length === 0) {
          updatedActions = updatedActions.filter((item) => item.id !== nextAction.id);
        }
      }

      return updatedActions;
    });
  };

  const clearAction = (id: number) => {
    handleActionChange(id, '');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.cardTitle}>{title}</Text>
          <View style={styles.statusContainer}>
            <Text style={styles.statusLabel}>Statut :</Text>
            <TouchableOpacity
              style={[
                styles.statusButton,
                { backgroundColor: status === 'Résolu' ? '#e8f5e9' : '#ffebee' }
              ]}
              onPress={toggleStatus}
            >
              <Text
                style={[
                  styles.statusText,
                  { color: status === 'Résolu' ? '#4caf50' : '#f44336' }
                ]}
              >
                {status}
              </Text>
              <MaterialIcons
                name={showStatusDropdown ? 'arrow-drop-up' : 'arrow-drop-down'}
                size={24}
                color="#757575"
              />
            </TouchableOpacity>
          </View>
        </View>

        {showStatusDropdown && (
          <View style={styles.dropdown}>
            <Pressable
              style={styles.dropdownItem}
              onPress={() => selectStatus('Résolu')}
            >
              <Text style={[styles.dropdownText, { color: '#4caf50' }]}>Résolu</Text>
            </Pressable>
            <Pressable
              style={styles.dropdownItem}
              onPress={() => selectStatus('Non-résolu')}
            >
              <Text style={[styles.dropdownText, { color: '#f44336' }]}>Non-résolu</Text>
            </Pressable>
          </View>
        )}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <View style={styles.cardInfoContainer}>
            <CustomInput
              style={styles.cardInfo}
              placeholder="Votre commentaire"
              icon={description.length > 0 ? 'trash' : 'mic'}
              placeholderColor="#45434354"
              containerStyle={styles.inputContainer}
              focusedStyle={styles.focusedStyle}
              iconStyle={styles.iconStyle}
              onIconPress={handleIconPress}
              onChangeText={onDescriptionChanged}
              value={description}></CustomInput>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Actions réalisées</Text>
          {actions.map(({ id, action }) => (
            <View key={id} style={styles.actionItem}>
              <View style={styles.actionDot} />
              <CustomInput
                style={styles.cardInfo}
                placeholder="Nouvelle action"
                icon={action.length > 0 ? 'trash' : 'mic'}
                placeholderColor="#45434354"
                containerStyle={styles.inputContainer}
                focusedStyle={styles.focusedStyle}
                iconStyle={styles.iconStyle}
                onChangeText={(text) => handleActionChange(id, text)}
                onIconPress={() => (action.length > 0 ? clearAction(id) : null)}
                value={action}
              />
            </View>
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

    // Ombre pour Android
    elevation: 3,

    // Ombre pour iOS
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.18,
    shadowRadius: 4,
    overflow: 'visible',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },
  cardInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  cardTitle: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '600'
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
    flex: 1,
    color: '#000000',
    fontSize: 12,
    fontWeight: '500',
    fontStyle: 'italic',
    width: '100%',
    padding: 6
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  statusLabel: {
    fontSize: 12,
    color: '#454343',
    marginRight: 8
  },
  statusButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4
  },
  statusText: {
    fontSize: 10,
    marginRight: 4
  },
  dropdown: {
    position: 'absolute',
    top: 60,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 4,
    elevation: 4,
    zIndex: 10, // Important pour iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  dropdownItem: {
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  dropdownText: {
    fontSize: 10
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginBottom: 16
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 500,
    marginBottom: 8
  },
  descriptionBox: {
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 4
  },
  description: {
    fontSize: 16
  },
  actionItem: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },
  actionDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 4,
    backgroundColor: '#757575',
  },
  actionText: {
    flex: 1,
    fontSize: 16
  },
  deleteButton: {
    padding: 4
  },
  newActionContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  actionInput: {
    flex: 1,
    fontSize: 16,
    color: '#9e9e9e',
    marginRight: 8
  },
  icon: {
    marginRight: 12
  },
});

export default ProblemReport;