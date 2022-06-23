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

const urlImageTest =
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1122&q=80';

interface Props {
  title: string;
  subTitle: string;
  urlImage?: string;
  onPress: () => void;
}

const BannerHome: React.FC<Props> = ({onPress, subTitle, title, urlImage}) => (
  <Container
    source={{uri: urlImage ? urlImage : urlImageTest}}
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
