import React, { useState } from 'react';
import { Modal, ScrollView, StyleSheet, View } from 'react-native';
import SignaledProblemCard, { Problem, ProblemStatus } from '@/components/ui/HeatProComponents/SignaledProblemCard';
import VerificationsComponent from '@/components/ui/HeatProComponents/VerificationsComponent';
import PartsCardComponent, { Part } from '@/components/ui/HeatProComponents/PartsCard';
import CommentCard from '@/components/ui/HeatProComponents/CommentCard';
import AssociatedMediaCard from '@/components/ui/HeatProComponents/AssociatedMediaCard';
import { IconProps } from '@/components/ui/HeatProComponents/headers/HeaderFicheTechniqueIntervention';
import { CustomButton } from '@/components/ui/CustomButton';
import { router } from 'expo-router';
import ModaleComponent from '@/components/ui/HeatProComponents/ModaleComponent';
import { Field } from '@/components/ui/HeatProComponents/InfoCard';

const InterventionFormVisualisationPage = () => {

  const onProfilePress = () => {
    router.push('/profile-page');
  };

  const onDisconnectPress = () => {
    router.push('/login');
  };

  const leftIcon: IconProps = { iconName: 'person', onPress: onProfilePress };
  const rightIcon: IconProps = { iconName: 'logout', onPress: onDisconnectPress };

  const fields: Field[] = [
    {
      label: 'Type de maintenance',
      value: 'Corrective',
      icon: { icon: 'build', color: '#657DDF' }
    },
    {
      label: 'Date et heure',
      value: 'Mardi 28 sept.',
      icon: { icon: 'event', color: '#657DDF' }
    },
    {
      label: 'Technicien intervenu',
      value: 'Igor Levic',
      icon: { icon: 'person', color: '#657DDF' }
    },
    {
      label: 'Problèmes résolus',
      valueIcon: { icon: 'cancel', color: '#F69091' },
      icon: { icon: 'assignment', color: '#657DDF' }
    }
  ];

  const fieldsTechnician: Field[] = [
    {
      label: 'Identité',
      value: 'Igor Levic',
      icon: { icon: 'person', color: '#657DDF' }
    },
    {
      label: 'Tél.',
      value: '06 16 24 31 47',
      icon: { icon: 'phone', color: '#657DDF' }
    }
  ];

  const problems: Problem[] = [
    {
      description: 'Fuite d\'eau dans le système de chauffage',
      actions: 'Tentative de localisation de la fuite',
      status: ProblemStatus.UNRESOLVED
    },
    {
      description: 'Panne électrique du tableau principal',
      actions: 'Vérification des disjoncteurs',
      status: ProblemStatus.ON_GOING
    },
    {
      description: 'Problème de ventilation',
      actions: 'Nettoyage des conduits',
      status: ProblemStatus.RESOLVED
    },
    {
      description: 'Fissure dans le mur porteur',
      actions: 'Évaluation structurelle',
      status: ProblemStatus.UNRESOLVED
    }
  ];

  const verifications = ['Pression système', 'Pompe de circulation', 'Intégrité brûleur', 'Circuit électrique'];

  const parts: Part[] = [
    { name: 'Rotor de pompe à circulation', ref: '829294949500' },
    { name: 'Rotor de pompe à circulation', ref: '824526874123' }
  ];

  let comment: string;
  const media: {
    icon: string,
    color?: string
  }[] = [{ icon: 'check-circle' }, { icon: 'check-circle' }, { icon: 'check-circle' }, { icon: 'check-circle' }];

  const onFormValidation = () => {
    console.log('Valider une intervention');
    openModal();
  };

  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const confirmValidation = () => {
    closeModal();
    //TODO: send request to save intervention
  };

  return (
    <View style={styles.parentContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <SignaledProblemCard problems={problems}></SignaledProblemCard>
          <VerificationsComponent verifications={verifications}
                                  IfEmptyMessage={'Aucune vérification effectuée'}></VerificationsComponent>
          <PartsCardComponent title="Pièces remplacées" parts={parts}
                              IfEmptyMessage={'Aucune pièce remplacée'}></PartsCardComponent>
          <PartsCardComponent title="Pièces commandées" parts={parts}
                              IfEmptyMessage={'Aucune pièce commandée'}></PartsCardComponent>
          <CommentCard title="Commentaires" ifEmptyMessage={'Aucun commentaire'}></CommentCard>
          <AssociatedMediaCard title="Media associés" media={media}
                               IfEmptyMessage={'Pas de media associés'}></AssociatedMediaCard>
          <CustomButton title={'Valider le formulaire'} style={styles.validationButton}
                        onPress={onFormValidation}></CustomButton>
          <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={closeModal}
          >
            <View style={styles.modalContainer}>
              <ModaleComponent title={'Valider le formulaire ?'}
                               description={'Êtes-vous sûr de vouloir valider le formulaire et terminer l’intervention en cours ?'}
                               leftButtonText={'Annuler'}
                               rightButtonText={'Valider'}
                               onPressLeftButton={closeModal}
                               onPressRightButton={confirmValidation}>
              </ModaleComponent>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F7F8ED'
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center'
  },
  validationButton: {
    width: '90%',
    borderRadius: 40,
    backgroundColor: '#657DDF',
    fontSize: 20,
    paddingVertical: 12,
    justifyContent: 'center',
    marginVertical: 16,
    shadowOffset: { width: 0, height: 3 },
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOpacity: 0.3
  }
});

export default InterventionFormVisualisationPage;