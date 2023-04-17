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
          title="Recursos didáticos"
          subTitle="Recursos para construção de aulas mais ilustrativas"
          backgroundColor="red"
          onPress={() => navigate('KnowledgeLibraryExplanatoryTable')}
        />
        <BannerClassroomStrategies
          title="Organizações didáticas"
          subTitle="Organizações didáticas para Ensino Fundamental II"
          backgroundColor="blue"
          onPress={() => navigate('KnowledgeLibraryCurriculumOrganization')}
        />
        <View style={{height: 50}} />
      </Content>
    </Container>
  );
};
