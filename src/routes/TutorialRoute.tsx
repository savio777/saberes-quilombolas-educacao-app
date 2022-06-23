import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Education, Pencil, PinMap} from '../components/TutorialComponents';

const Stack = createNativeStackNavigator();

const TutorialRoute = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="PinMap" component={PinMap} />
    <Stack.Screen name="Education" component={Education} />
    <Stack.Screen name="Pencil" component={Pencil} />
  </Stack.Navigator>
);

export default TutorialRoute;
