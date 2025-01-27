import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { NavigationBarItem } from '@/components/ui/HeatProComponents/NavigationBarItem';
import { router, usePathname } from 'expo-router';

const NavigationBarComponent = () => {
  const currentPath = usePathname();

  const navigationItems = [
    {
      title: "Accueil",
      path: "/home-page",
      iconName: "home"
    },
    {
      title: "Interventions",
      path: "/intervention",
      iconName: "assignment"
    },
    {
      title: "Formulaire",
      path: "/intervention-form-visualisation-page",
      iconName: "edit"
    },
    {
      title: "Spécification",
      path: "/specification",
      iconName: "article"
    },
    {
      title: "Profil",
      path: "/profile-page",
      iconName: "person"
    }
  ];

  const isPathActive = (itemPath: string) => {
    return currentPath === itemPath;
  };

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {navigationItems.map((item, index) => (
          <NavigationBarItem
            key={index}
            title={item.title}
            onPress={() => handleNavigation(item.path)}
            iconName={item.iconName}
            iconSize={24}
            style={styles.navbarElement}
            iconColor={isPathActive(item.path) ? "#657DDF" : "#9D9D9D"}
            textStyle={isPathActive(item.path) ? styles.navbarTextSelected : styles.navbarText}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#FFFFFF',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  navbarElement: {
    flex: 1,
    alignItems: 'center',
  },
  navbarTextSelected: {
    fontSize: 12,
    color: '#657DDF',
    fontWeight: '700'
  },
  navbarText: {
    fontSize: 12,
    color: '#9D9D9D',
    fontWeight: '500'
  }
});

export default NavigationBarComponent;