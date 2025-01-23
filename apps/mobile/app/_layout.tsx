import { useFonts } from 'expo-font';
import { Stack, useNavigation } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { IPProvider } from './(tabs)/IPContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@/app/(tabs)/login';
import HomePageScreen from '@/app/(tabs)/home-page';
import ProfilePage from '@/app/(tabs)/profile-page';
import InterventionListPage from '@/app/(tabs)/InterventionListPage';
import InterventionPage from '@/app/(tabs)/InterventionPage';
import { View } from 'react-native';
import NavigationBar from '@/components/ui/HeatProComponents/NavigationBar';
import { useNavigationState } from '@react-navigation/native';
import SpecificationPage from '@/app/(tabs)/specifications-page';
import InterventionFormVisualisationPage from '@/app/(tabs)/InterventionFormVisualisationPage';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const Stack = createNativeStackNavigator();


  return (
    <IPProvider>
      <View style={{ flex: 1 }}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name={HeatProRoutes.HomePage} component={HomePageScreen} />
          <Stack.Screen name={HeatProRoutes.Login} component={LoginScreen} />
          <Stack.Screen name={HeatProRoutes.Profile} component={ProfilePage} />
          <Stack.Screen name={HeatProRoutes.Specification} component={SpecificationPage} />
          <Stack.Screen name={HeatProRoutes.HistoriqueIntervention} component={InterventionListPage} />
          <Stack.Screen name={HeatProRoutes.DetailsIntervention} component={InterventionPage} />
          <Stack.Screen name={HeatProRoutes.InterventionFormVisualisationPage} component={InterventionFormVisualisationPage} />
        </Stack.Navigator>

        <BottomNavigationWrapper></BottomNavigationWrapper>
      </View>
    </IPProvider>
  );
}

function getRouteName(state) {
  if (state?.routes?.length > 0) {
    return state.routes[state.index]?.name || HeatProRoutes.Login;
  }
  return HeatProRoutes.Login;
}

function BottomNavigationWrapper() {
  const navigation = useNavigation();
  const routeName = useNavigationState(getRouteName);

  return (
    <NavigationBar
      navBarWidth="100%"
      currentRouteName={routeName}
      navigation={navigation}
    />
  );
}

export enum HeatProRoutes {
  HomePage = 'HomePage',
  Login = 'Login',
  Profile = 'Profile',
  Specification = 'Specification',
  HistoriqueIntervention = 'HistoriqueIntervention',
  DetailsIntervention = 'DetailsIntervention',
  InterventionFormVisualisationPage = 'InterventionFormVisualisationPage'
}
