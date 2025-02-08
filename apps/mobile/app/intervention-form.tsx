import React, { useState } from 'react';
import { View } from 'react-native';
import { router } from 'expo-router';
import { InterventionData } from '@/app/types';
import InterventionFormEditionPage from '@/app/intervention-form-edition-page';
import HeaderFicheTechniqueIntervention
  from '@/components/ui/HeatProComponents/headers/HeaderFicheTechniqueIntervention';
import InterventionFormVisualisationPage from '@/app/intervention-form-visualisation-page';

const InterventionForm = () => {
  // État partagé
  const [interventionData, setInterventionData] = useState<InterventionData>({
    problems: [],
    verifications: [],
    partsReplaced: [],
    partsOrdered: [],
    comment: '',
    media: []
  });

  // État pour la vue active
  const [activeView, setActiveView] = useState<'visualization' | 'edition'>('visualization');

  // Navigation et déconnexion
  const onProfilePress = () => {
    router.push('/profile-page');
  };

  const onDisconnectPress = () => {
    router.push('/login');
  };

  const leftIcon = { iconName: 'person', onPress: onProfilePress };
  const rightIcon = { iconName: 'logout', onPress: onDisconnectPress };

  // Gestion des mises à jour des données
  const updateInterventionData = (newData: Partial<InterventionData>) => {
    setInterventionData(prev => ({ ...prev, ...newData }));
  };

  // Gestion de la validation du formulaire
  const handleFormValidation = async () => {
    try {
      // TODO: Implémenter la logique de sauvegarde
      console.log('Saving intervention data:', interventionData);
      // Redirection après sauvegarde
      router.push('/interventions-list');
    } catch (error) {
      console.error('Error saving intervention:', error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <HeaderFicheTechniqueIntervention
        title="Formulaire"
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        leftMenu="Visualisation"
        rightMenu="Édition"
        activeView={activeView}
        onViewChange={setActiveView}
      />

      {activeView === 'visualization' ? (
        <InterventionFormVisualisationPage
          data={interventionData}
          onValidate={handleFormValidation}
        />
      ) : (
        <InterventionFormEditionPage
          data={interventionData}
          onUpdateData={updateInterventionData}
          onValidate={handleFormValidation}
        />
      )}
    </View>
  );
};

export default InterventionForm;