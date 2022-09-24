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
          title="Quadro Explicativo"
          subTitle="Principais legislações educacionais relacionado as comunidades negras rurais."
          backgroundColor="red"
          onPress={() => navigate('KnowledgeLibraryExplanatoryTable')}
        />
        <BannerClassroomStrategies
          title="Organização Currícular"
          subTitle="Proposta pedagógica"
          backgroundColor="blue"
          onPress={() => navigate('SignificantMethodologies')}
        />
        <View style={{height: 50}} />
      </Content>
    </Container>
  );
};
