import React from 'react';
import {CommonActions, useNavigation} from '@react-navigation/native';

import ContainerKeyboardAvoidingView from '../../ContainerKeyboardAvoidingView';
import PencilImageSvg from '../../../assets/pencil.svg';
import ButtonNext from '../../ButtonNext';
import {Text, Container, ContainerNext} from '../styles';
import {textLoremIpsum} from '../../../helpers/utils';
import Indicators from '../../Indicators';

export default function Pencil() {
  const {dispatch} = useNavigation();

  return (
    <ContainerKeyboardAvoidingView>
      <Container>
        <PencilImageSvg width="80%" height={300} fill="black" />
        <Text>{textLoremIpsum}</Text>
        <ContainerNext>
          <ButtonNext
            onPress={() =>
              dispatch(CommonActions.reset({routes: [{name: 'TabBarRoute'}]}))
            }
          />
          <Indicators arrayLenght={[null, null, null]} selected={3} />
        </ContainerNext>
      </Container>
    </ContainerKeyboardAvoidingView>
  );
}
