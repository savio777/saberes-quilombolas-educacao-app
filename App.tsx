import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import Routes from './src/routes';
import colors from './src/helpers/colors';
import store, {persistor} from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
          <NavigationContainer>
            <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
            <Routes />
          </NavigationContainer>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}
