import React from 'react';
import {FlatList, View} from 'react-native';

import {Container, Content, Title, SubTitle, Image, Divider} from './styles';
import {BannerMovies} from '../../components';

import ImageSupportMaterialMockup from '../../assets/material-apoio-imagem.png';

const mockupData = [
  {title: 'Rei Leão'},
  {title: 'Rei Leão'},
  {title: 'Rei Leão'},
  {title: 'Rei Leão'},
  {title: 'Rei Leão'},
  {title: 'Rei Leão'},
];

export default () => (
  <Container>
    <Content>
      <View style={{height: 70}} />
      <Title>ATIVIDADES COMPLEMENTARES</Title>
      <SubTitle>Imagens</SubTitle>
      <FlatList
        horizontal
        keyExtractor={(_, index) => String(index)}
        data={mockupData}
        renderItem={() => <Image source={ImageSupportMaterialMockup} />}
      />
      <Divider />
      <SubTitle>Filmes</SubTitle>
      <FlatList
        horizontal
        keyExtractor={(_, index) => String(index)}
        data={mockupData}
        renderItem={({item}) => (
          <BannerMovies title={item.title} onPress={() => {}} />
        )}
      />
    </Content>
  </Container>
);
