import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';

import store from '@/store';

import ThemeProvider from '@/components/ThemeProvider';

import colors from '@/theme/colors';
import Routes from '@/routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle='auto' backgroundColor={colors.PRIMARY} />
      <NavigationContainer>
        <ThemeProvider>
          <Provider store={store}>
            <Routes />
          </Provider>
        </ThemeProvider>
      </NavigationContainer>
    </>
  );
}
