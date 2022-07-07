import React from 'react';

import {
  Container,
  ContentRight,
  ImageLeft,
  Text,
  Title,
  ContainerButton,
  TextButton,
} from './styles';

import ImageWoman from '../../assets/woman-africa.jpg';

interface Props {
  title: string;
  text: string;
  onPress(): void;
  imageUrl?: string;
}

const BannerKnowledgeLibrary: React.FC<Props> = ({
  onPress,
  text,
  title,
  imageUrl,
}) => (
  <Container>
    <ImageLeft source={imageUrl ? {uri: imageUrl} : ImageWoman} />
    <ContentRight>
      <Title>{title}</Title>
      <Text numberOfLines={3}>{text}</Text>
      <ContainerButton onPress={onPress}>
        <TextButton>Saiba Mais</TextButton>
      </ContainerButton>
    </ContentRight>
  </Container>
);

export default BannerKnowledgeLibrary;
