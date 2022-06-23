import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Login, SignUp} from '../screens';

const Stack = createNativeStackNavigator();

const SignOutStack: React.FC = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="SignUp" component={SignUp} />
  </Stack.Navigator>
);

export default SignOutStack;
