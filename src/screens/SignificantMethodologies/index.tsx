import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {BannerClassroomStrategies} from '../../components';
import {Container, Content} from './styles';

export default () => {
  const {navigate} = useNavigation();

  return (
    <Container>
      <Content>
        <View style={{height: 70}} />
        <BannerClassroomStrategies
          title="Planos de trabalho"
          subTitle="Planos docentes e avaliações para o Ensino Fundamental II"
          backgroundColor="red"
          onPress={() => navigate('KnowledgeLibrary')}
        />
        <BannerClassroomStrategies
          title="Sequência didáticas"
          subTitle="Sequências didáticas para Ensino Fundamental II"
          backgroundColor="blue"
          onPress={() => navigate('KnowledgeLibrary')}
        />
        <BannerClassroomStrategies
          title="Explanação de recursos didáticos e linguagens"
          subTitle="A utilização de recursos didáticos que favorecessem o estudo da História das comunidades"
          backgroundColor="purple"
          onPress={() => navigate('KnowledgeLibrary')}
        />
        <View style={{height: 50}} />
      </Content>
    </Container>
  );
};
