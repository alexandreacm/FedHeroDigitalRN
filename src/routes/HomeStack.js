import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '@/screens/Home';
import DetailsFed from '@/screens/DetailsFed';

const { Navigator, Screen } = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Navigator>
      <Screen name='Home' component={Home} options={{ headerShown: false }} />
      <Screen
        name='DetailsFed'
        component={DetailsFed}
        options={{ title: 'Fed Details' }}
      />
    </Navigator>
  );
}
