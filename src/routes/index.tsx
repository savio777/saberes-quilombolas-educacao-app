import React from 'react';
import {useSelector} from 'react-redux';

import SignOutStack from './SignOutStack';
import SignedStack from './SignedStack';
import {RootState} from '../store';

export default () => {
  const {logged} = useSelector((state: RootState) => state.auth);

  /*
  if (loading) {
    return <ActivityIndicator />;
  }
  */

  return !logged ? <SignOutStack /> : <SignedStack />;
};
