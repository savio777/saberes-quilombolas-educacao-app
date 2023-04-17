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
          História, metodologias de ensino e comunidades negras quilombolas As
          comunidades negras quilombolas possuem suas especificidades,
          trajetória histórica e identificações pautadas em suas diferenças e o
          dialogando com suas questões étnico-raciais e culturais. Sobre esta
          premissa que a educação exercida em escolas quilombolas relacionam com
          o todo contexto das comunidades. Diante disso, apresentamos o
          aplicativo traz simultaneamente algumas metodologias significativas de
          ensino, conteúdos e materiais de apoio para construção de propostas de
          educação escolar quilombolas contextualizadas. Envolva-se com estas
          metodologias e encontre algumas estratégias para uma educação mais
          representativa.
        </Text>
        <ContainerButtonNext>
          <ButtonNext onPress={() => navigate('Home')} />
        </ContainerButtonNext>
        <View style={{height: 40}} />
      </Content>
    </Container>
  );
};
