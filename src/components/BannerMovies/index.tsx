import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Image,
  Text,
  Title,
  ContentLeft,
  ContentRight,
  Dot,
} from './styles';
import ImageSupportMaterialMockup from '../../assets/material-apoio-video.png';

interface Props {
  title: string;
  sourceImage?: string;
  onPress(): void;
}

const BannerMovies: React.FC<Props> = ({title, sourceImage}) => (
  <Image source={sourceImage ? {uri: sourceImage} : ImageSupportMaterialMockup}>
    <Container>
      <ContentLeft>
        <Title>{title}</Title>
        <Text>Assistir Agora</Text>
      </ContentLeft>
      <ContentRight>
        <Dot>
          <Icon name="play" size={25} />
        </Dot>
      </ContentRight>
    </Container>
  </Image>
);

export default BannerMovies;
