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
  marginLeft?: boolean;
}

const BannerKnowledgeLibrary: React.FC<Props> = ({
  onPress,
  text,
  title,
  imageUrl,
  marginLeft,
}) => (
  <Container marginLeft={marginLeft}>
    <ImageLeft source={imageUrl ? {uri: imageUrl} : ImageWoman} />
    <ContentRight>
      <Title numberOfLines={2}>{title}</Title>
      <Text numberOfLines={3}>{text}</Text>
      <ContainerButton onPress={onPress}>
        <TextButton>Saiba Mais</TextButton>
      </ContainerButton>
    </ContentRight>
  </Container>
);

export default BannerKnowledgeLibrary;
