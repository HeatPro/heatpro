import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, usePathname } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { IPProvider } from './IPContext';
import NavigationBarComponent from '@/components/ui/HeatProComponents/NavigationBar';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const pathname = usePathname();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const hideNavBarScreens = ['/login', '/scanner'];
  const shouldShowNavBar = !hideNavBarScreens.includes(pathname);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <IPProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <StatusBar hidden />
        <View style={{ flex: 1 }}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen
              name="login"
              options={{
                gestureEnabled: false
              }}
            />
            <Stack.Screen
              name="home-page"
              options={{
                gestureEnabled: false
              }}
            />
            <Stack.Screen
              name="intervention"
              options={{
                gestureEnabled: true
              }}
            />
            <Stack.Screen
              name="intervention-form"
              options={{
                gestureEnabled: true
              }}
            />
            <Stack.Screen 
              name="fiche-technique"
              options={{
                gestureEnabled: true
              }}
            />
            <Stack.Screen 
              name="hololens-qrcode"
              options={{
                gestureEnabled: true
              }}
            />
            <Stack.Screen name="scanner" />
            <Stack.Screen name="profile-page" />
            <Stack.Screen name="+not-found" />
          </Stack>
          {shouldShowNavBar && <NavigationBarComponent/>}
          <StatusBar style="auto" />
        </View>
      </ThemeProvider>
    </IPProvider>
  );
}