import React from 'react';
import {View} from 'react-native';

import {BannerClassroomStrategies} from '../../components';
import {Container, Content} from './styles';

export default () => (
  <Container>
    <Content>
      <View style={{height: 70}} />
      <BannerClassroomStrategies
        title="Planos de trabalho"
        subTitle="Planos docentes e avaliações para o Ensino Fundamental II"
        backgroundColor="red"
        onPress={() => {}}
      />
      <BannerClassroomStrategies
        title="Sequência didáticas"
        subTitle="Sequências didáticas para Ensino Fundamental II"
        backgroundColor="blue"
        onPress={() => {}}
      />
      <BannerClassroomStrategies
        title="Explanação de recursos didáticos e linguagens"
        subTitle="A utilização de recursos didáticos que favorecessem o estudo da História das comunidades"
        backgroundColor="purple"
        onPress={() => {}}
      />
      <View style={{height: 50}} />
    </Content>
  </Container>
);
