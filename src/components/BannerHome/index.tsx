import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Content,
  Text,
  Title,
  ContainerLeft,
  ContainerRight,
  Circle,
} from './styles';

import ImageSchoolBackground from '../../assets/background_school.jpeg';

interface Props {
  title: string;
  subTitle: string;
  urlImage?: string;
  onPress: () => void;
}

const BannerHome: React.FC<Props> = ({onPress, subTitle, title, urlImage}) => (
  <Container
    source={urlImage ? {uri: urlImage} : ImageSchoolBackground}
    imageStyle={{borderRadius: 15}}
    resizeMode="cover">
    <Content onPress={onPress}>
      <ContainerLeft>
        <Title>{title}</Title>
        <Text numberOfLines={5}>{subTitle}</Text>
      </ContainerLeft>
      <ContainerRight>
        <Circle>
          <Icon name="arrow-right" size={25} color="black" />
        </Circle>
      </ContainerRight>
    </Content>
  </Container>
);

export default BannerHome;
