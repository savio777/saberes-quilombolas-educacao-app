import React from 'react';
import {ActivityIndicator} from 'react-native';

import {useAuth} from '../AuthHooks/Auth';
import SignOutStack from './SignOutStack';
import SignedStack from './SignedStack';

export default () => {
  const {loading, user} = useAuth();

  if (loading) {
    return <ActivityIndicator />;
  }

  return !user ? <SignOutStack /> : <SignedStack />;
};
