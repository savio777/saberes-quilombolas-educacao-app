import React from 'react';

import {Container, Content, Text, Title} from './styles';

import GradientBlue from '../../assets/gradienta-unsplash-blue-1.jpg';
import GradientRed from '../../assets/gradienta-unsplash-red-1.jpg';
import GradientPurple from '../../assets/gradienta-unsplash-purple-1.jpg';

const getImageBackground = (color: 'blue' | 'red' | 'purple') => {
  switch (color) {
    case 'blue':
      return GradientBlue;
    case 'red':
      return GradientRed;
    case 'purple':
      return GradientPurple;
    default:
      return GradientBlue;
  }
};

interface Props {
  title: string;
  subTitle: string;
  onPress: () => void;
  backgroundColor: 'blue' | 'red' | 'purple';
}

const BannerClassroomStrategies: React.FC<Props> = ({
  title,
  subTitle,
  onPress,
  backgroundColor,
}) => (
  <Container
    type={backgroundColor}
    source={getImageBackground(backgroundColor)}
    imageStyle={{borderRadius: 15}}
    resizeMode="contain">
    <Content onPress={onPress}>
      <Title>{title}</Title>
      <Text numberOfLines={5}>{subTitle}</Text>
    </Content>
  </Container>
);

export default BannerClassroomStrategies;
