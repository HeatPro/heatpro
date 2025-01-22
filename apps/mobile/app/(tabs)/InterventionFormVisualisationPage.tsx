import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
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

const InterventionFormVisualisationPage = () => {

  const leftIcon: IconProps = { iconName: 'person' };
  const rightIcon: IconProps = { iconName: 'logout' };

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
  };

  return (
    <View style={styles.parentContainer}>
      <HeaderFicheTechniqueIntervention title="Intervention" leftIcon={leftIcon} rightIcon={rightIcon}
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
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
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