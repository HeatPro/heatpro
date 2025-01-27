import React, { useState } from 'react';
import { Modal, ScrollView, StyleSheet, View } from 'react-native';
import SignaledProblemCard, { Problem } from '@/components/ui/HeatProComponents/SignaledProblemCard';
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

const InterventionFormVisualisationPage = () => {

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
          <SignaledProblemCard problems={problems}></SignaledProblemCard>
          <VerificationsComponent verifications={verifications}
                                  IfEmptyMessage={'Aucune vérification effectuée'}></VerificationsComponent>
          <PartsCardComponent title="Pièces remplacées" parts={parts}
                              IfEmptyMessage={'Aucune pièce remplacée'}></PartsCardComponent>
          <PartsCardComponent title="Pièces commandées" parts={parts}
                              IfEmptyMessage={'Aucune pièce commandée'}></PartsCardComponent>
          <CommentCard title="Commentaires" comment={comment} ifEmptyMessage={'Aucun commentaire'}></CommentCard>
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