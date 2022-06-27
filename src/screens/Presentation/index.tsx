import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {ButtonNext} from '../../components';
import CupSvg from '../../assets/cup.svg';
import {textLoremIpsum} from '../../helpers/utils';
import {
  Container,
  Content,
  Text,
  ContainerImage,
  ContainerButtonNext,
} from './styles';

export default () => {
  const {navigate} = useNavigation();

  return (
    <Container>
      <Content>
        <View style={{height: 20}} />
        <ContainerImage>
          <CupSvg width="30%" height={100} />
        </ContainerImage>
        <Text>
          {textLoremIpsum}
          {textLoremIpsum}
          {textLoremIpsum}
          {textLoremIpsum}
          {textLoremIpsum}
          {textLoremIpsum}
          {textLoremIpsum}
          {textLoremIpsum}
          {textLoremIpsum}
          {textLoremIpsum}
          {textLoremIpsum}
        </Text>
        <ContainerButtonNext>
          <ButtonNext onPress={() => navigate('Home')} />
        </ContainerButtonNext>
        <View style={{height: 40}} />
      </Content>
    </Container>
  );
};
