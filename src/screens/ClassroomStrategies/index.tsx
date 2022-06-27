import React from 'react';
import {View} from 'react-native';

import {BannerClassroomStrategies} from '../../components';
import {Container, Content} from './styles';

export default () => (
  <Container>
    <Content>
      <View style={{height: 70}} />
      <BannerClassroomStrategies
        title="Mapas Mentais"
        subTitle="Principais legislações educacionais relacionado as comunidades negras rurais."
        backgroundColor="red"
        onPress={() => {}}
      />
      <BannerClassroomStrategies
        title="Organização Currícular"
        subTitle="Proposta pedagógica"
        backgroundColor="blue"
        onPress={() => {}}
      />
      <BannerClassroomStrategies
        title="Teste"
        subTitle="Teste Teste"
        backgroundColor="purple"
        onPress={() => {}}
      />
      <View style={{height: 50}} />
    </Content>
  </Container>
);
