import React, { useCallback, useEffect, useState } from 'react';
// import AppLoading from 'expo-app-loading';
import { DMSans_400Regular } from '@expo-google-fonts/dm-sans';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native';
import { AuthProvider } from '@hooks/auth';
import { SignIn } from '@screens/SignIn';

import theme from './src/theme';

import * as SplashScreen from 'expo-splash-screen';
import * as Font from "expo-font";


SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          DMSans_400Regular,
          DMSerifDisplay_400Regular
        });
        // await new Promise(resolve => setTimeout(resolve, 10000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View
      onLayout={onLayoutRootView}
      style={{
        flex: 1
      }}
    >
      <ThemeProvider theme={theme}>
          <StatusBar style="light" translucent backgroundColor="transparent"/>
          <AuthProvider>
            <SignIn />
          </AuthProvider>  
      </ThemeProvider>
    </View>
  );
}
