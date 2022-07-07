import React from 'react';
import {View} from 'react-native';

import {BannerKnowledgeLibrary} from '../../components';
import {Container, Content, Title} from './styles';

const contentMockup = {
  title: 'Quilombo de Maria Conga em Magé',
  text: 'CARVALHO, Camila Abreu de.',
};

export default () => (
  <Container>
    <Content>
      <View style={{height: 70}} />
      <Title>
        Perspectivas afro-brasileiras e indígenas à luz do ensino de história.
      </Title>
      <BannerKnowledgeLibrary
        title={contentMockup.title}
        text={contentMockup.text}
        onPress={() => {}}
      />
      <BannerKnowledgeLibrary
        title={contentMockup.title}
        text={contentMockup.text}
        onPress={() => {}}
      />
      <BannerKnowledgeLibrary
        title={contentMockup.title}
        text={contentMockup.text}
        onPress={() => {}}
      />
      <BannerKnowledgeLibrary
        title={contentMockup.title}
        text={contentMockup.text}
        onPress={() => {}}
      />
      <BannerKnowledgeLibrary
        title={contentMockup.title}
        text={contentMockup.text}
        onPress={() => {}}
      />
    </Content>
  </Container>
);
