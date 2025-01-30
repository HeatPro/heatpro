import React, { useState } from 'react';
import { Modal, ScrollView, StyleSheet, View } from 'react-native';
import SignaledProblemCard, { Problem, ProblemStatus } from '@/components/ui/HeatProComponents/SignaledProblemCard';
import VerificationsComponent from '@/components/ui/HeatProComponents/VerificationsComponent';
import PartsCardComponent, { Part } from '@/components/ui/HeatProComponents/PartsCard';
import CommentCard from '@/components/ui/HeatProComponents/CommentCard';
import AssociatedMediaCard from '@/components/ui/HeatProComponents/AssociatedMediaCard';
import {
  HeaderFicheTechniqueIntervention,
  IconProps
} from '@/components/ui/HeatProComponents/headers/HeaderFicheTechniqueIntervention';
import { CustomButton } from '@/components/ui/CustomButton';
import { router } from 'expo-router';
import ModaleComponent from '@/components/ui/HeatProComponents/ModaleComponent';
import ProblemTrackingCard from '@/components/ui/HeatProComponents/edition-components/SignaledProblemEdition';
import AddPartCardComponent from '@/components/ui/HeatProComponents/edition-components/add-part-card/AddPartCardComponent';
import CommentEditionCardComponent from '@/components/ui/HeatProComponents/edition-components/CommentEdition';

const InterventionFormEditionPage = () => {

  const onProfilePress = () => {
    router.push("/profile-page")
  };

  const onDisconnectPress = () => {
    router.push("/login")
  };

  const leftIcon: IconProps = { iconName: 'person', onPress: onProfilePress };
  const rightIcon: IconProps = { iconName: 'logout', onPress: onDisconnectPress };

  const problems: Problem[] = [];

  const verifications = [];

  const parts: Part[] = [];

  const comment: string = '';
  const media: {
    icon: string,
    color?: string
  }[] = [];

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
      <HeaderFicheTechniqueIntervention title="Formulaire" leftIcon={leftIcon} rightIcon={rightIcon}
                                        leftMenu="Visualisation" rightMenu="Édition"></HeaderFicheTechniqueIntervention>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <AddPartCardComponent title="Pièces commandées"></AddPartCardComponent>
          <AddPartCardComponent title="Pièces remplacées"></AddPartCardComponent>
          <VerificationsComponent verifications={verifications}
                                  IfEmptyMessage={'Aucune vérification effectuée'}></VerificationsComponent>
          <PartsCardComponent title="Pièces remplacées" parts={parts}
                              IfEmptyMessage={'Aucune pièce remplacée'}></PartsCardComponent>
          <PartsCardComponent title="Pièces commandées" parts={parts}
                              IfEmptyMessage={'Aucune pièce commandée'}></PartsCardComponent>
         <CommentEditionCardComponent title="Commentaire"></CommentEditionCardComponent>
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

export default InterventionFormEditionPage;