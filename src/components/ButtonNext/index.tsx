import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Container} from './styles';

interface Props {
  onPress(): void;
}

const ButtonNext: React.FC<Props> = ({onPress}) => (
  <Container onPress={onPress}>
    <MaterialCommunityIcons name="arrow-right" color="white" size={30} />
  </Container>
);

export default ButtonNext;
