import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TutorialRoute from './TutorialRoute';
import TabBarRoute from './TabBarRoute';

const Stack = createNativeStackNavigator();

const SignOutStack: React.FC = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    {/*<Stack.Screen name="Tutorial" component={TutorialRoute} />*/}
    <Stack.Screen name="TabBarRoute" component={TabBarRoute} />
  </Stack.Navigator>
);

export default SignOutStack;
