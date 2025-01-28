import React from 'react';
import { ScrollView, StyleSheet, View, Text, Platform } from 'react-native';
import InterventionCardComponent, { Field } from '@/components/ui/HeatProComponents/InfoCard';
import { Link, router } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderFicheTechniqueIntervention, IconProps } from '@/components/ui/HeatProComponents/headers/HeaderFicheTechniqueIntervention';

export default function InterventionList() {
  const fields: Field[] = [
    {
      label: 'Horaire',
      value: '09h30',
      icon: { icon: 'event', color: '#657DDF' }
    },
    {
      label: 'Technicien intervenu',
      value: 'Igor Levic',
      icon: { icon: 'person', color: '#657DDF' }
    },
    {
      label: 'Pièces changées',
      value: '4',
      icon: { icon: 'build', color: '#657DDF' }
    },
    {
      label: 'Problèmes résolus',
      valueIcon: { icon: 'cancel', color: '#F69091' },
      icon: { icon: 'assignment', color: '#657DDF' }
    }
  ];

  const onProfilePress = () => {
    console.log("profile")
    router.push("/profile-page")
  };

  const onDisconnectPress = () => {
    console.log("disconnect")
    router.push("/login")
  };

  const leftIcon: IconProps = { iconName: 'person', onPress: onProfilePress };
  const rightIcon: IconProps = { iconName: 'logout', onPress: onDisconnectPress };

  return (
    <>
      <HeaderFicheTechniqueIntervention title="Intervention" leftIcon={leftIcon} rightIcon={rightIcon}
                                        ></HeaderFicheTechniqueIntervention>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {[1, 2, 3, 4, 5, 6].map((id) => (
            <Link href={`/intervention/${id}`} key={id} asChild>
              <TouchableOpacity style={styles.cardWrapper}>
                <InterventionCardComponent
                  title="Maintenance corrective"
                  fields={fields}
                  topRightInfo="Mardi 12 Sept. 2024"
                />
              </TouchableOpacity>
            </Link>
          ))}
        </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
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
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.8,
  },
  scrollContent: {
    backgroundColor: '#F5F5F5',
  },
  cardWrapper: {
    width: '100%',
    marginBottom: 0,
    borderRadius: 12,
    ...Platform.select({
      ios: {
        /*shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,*/
      },
      android: {
        elevation: 2,
      },
    }),
  }
});