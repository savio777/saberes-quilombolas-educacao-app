import 'react-native-gesture-handler';
import React from 'react';
import {View, StatusBar, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AppProvider from './src/AuthHooks';
import Routes from './src/routes';
import colors from './src/helpers/colors';

export default function App() {
  return (
    <AppProvider>
      <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
        <NavigationContainer>
          <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
          <Routes />
        </NavigationContainer>
      </SafeAreaView>
    </AppProvider>
  );
}
