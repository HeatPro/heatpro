import React, { ReactNode } from 'react';
import { 
  Image, 
  StyleSheet, 
  Platform, 
  TextInput, 
  StyleProp, 
  ViewStyle, 
  TextStyle,
  ImageStyle
} from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IPProvider, useIPAddress } from './IPContext';
import { ThemeColors } from './types';


// Development mode flag
const developMode = true;

interface IPInputProps {
  style?: StyleProp<ViewStyle>;
}

const IPInput: React.FC<IPInputProps> = ({ style }) => {
  const { ipAddress, setIPAddress } = useIPAddress();
  
  return (
    <ThemedView style={[styles.ipInputContainer, style]}>
      <ThemedText>Development Mode IP:</ThemedText>
      <TextInput
        value={ipAddress}
        onChangeText={setIPAddress}
        placeholder="Enter IP Address"
        placeholderTextColor="#FFFFFFF"
        style={styles.input}
      />
    </ThemedView>
  );
};

interface ThemedTextProps {
  type?: 'title' | 'default';
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}

interface ParallaxScrollViewProps {
  headerBackgroundColor: string;
  headerImage: ReactNode;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const App: React.FC = () => {
    const headerBackground: ThemeColors = {
    light: '#ffffff',
    dark: '#000000'
  };

  return (
      <ParallaxScrollView
        headerBackgroundColor={headerBackground}
        headerImage={
          <Image
            source={require('@/assets/images/partial-react-logo.png')}
            style={styles.reactLogo}
          />
        }>
        {developMode && <IPInput />}
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Welcome</ThemedText>
          <HelloWave />
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="title">Step One</ThemedText>
          <ThemedText>
            Edit <ThemedText type="default">App.tsx</ThemedText> to get started.
            Press{' '}
            <ThemedText type="default">
              {Platform.select({
                ios: 'cmd + R',
                android: 'R + R',
                web: 'F12'
              })}
            </ThemedText>{' '}
            to open developer menu
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="title">See Your Changes</ThemedText>
          <ThemedText>
            Tap the Explore button to preview your app.
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="title">Ready to Deploy?</ThemedText>
          <ThemedText>
            When you're ready to share your app with the world, tap
            <ThemedText type="default"> Build</ThemedText> then
            <ThemedText type="default"> Deploy</ThemedText> to publish to
            <ThemedText type="default"> expo.dev</ThemedText> or
            <ThemedText type="default"> npm</ThemedText>.
          </ThemedText>
        </ThemedView>
      </ParallaxScrollView>
  );
};

interface Styles {
  titleContainer: ViewStyle;
  stepContainer: ViewStyle;
  reactLogo: ImageStyle;
  ipInputContainer: ViewStyle;
  input: ViewStyle;
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  ipInputContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    paddingHorizontal: 8,
    marginTop: 8,
    color: '#ffff',
  },
});

export default App;