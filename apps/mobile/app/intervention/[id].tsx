import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import InterventionCardComponent, { Field } from '@/components/ui/HeatProComponents/InfoCard';
import SignaledProblemCard, { Problem, ProblemStatus } from '@/components/ui/HeatProComponents/SignaledProblemCard';
import VerificationsComponent from '@/components/ui/HeatProComponents/VerificationsComponent';
import PartsCardComponent, { Part } from '@/components/ui/HeatProComponents/PartsCard';
import CommentCard from '@/components/ui/HeatProComponents/CommentCard';
import AssociatedMediaCard from '@/components/ui/HeatProComponents/AssociatedMediaCard';

export default function InterventionDetail() {
  const { id } = useLocalSearchParams();

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

  const comment: string = "La fuite restante n'a pas pu être localisée, il faut vérifier s'il n'y a pas des joints ou des tuyaux défectueux.";

  const media: {
    icon: string,
    color?: string
  }[] = [{ icon: 'check-circle' }, { icon: 'check-circle' }, { icon: 'check-circle' }, { icon: 'check-circle' }];

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>Intervention</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <InterventionCardComponent title="Informations générales" fields={fields} />
          <InterventionCardComponent title="Technicien intervenu" fields={fieldsTechnician} />
          <SignaledProblemCard problems={problems} />
          <VerificationsComponent verifications={verifications} />
          <PartsCardComponent title="Pièces remplacées" parts={parts} />
          <PartsCardComponent title="Pièces commandées" parts={parts} />
          <CommentCard title="Commentaires" comment={comment} />
          <AssociatedMediaCard title="Media associés" media={media} />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
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
  header: {
    height: '18%',
    backgroundColor: '#657DDF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4, // Pour Android
    shadowColor: '#000', // Pour iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    width: '100%'
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    textShadowColor: 'rgba(0,0,0,0.27)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4
  },
});