import React from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import PersonEllipseMockupSvg from '../../assets/person-ellipse-mockup.svg';
import {Container, ContainerFlex, Content, Title} from './styles';
import colors from '../../helpers/colors';

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({title}) => (
  <Container>
    <Content>
      <ContainerFlex principal>
        <Title numberOfLines={2}>{title}</Title>
      </ContainerFlex>
      <ContainerFlex>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="magnify"
            size={38}
            color={colors.black}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <PersonEllipseMockupSvg width={38} height={38} />
        </TouchableOpacity>
      </ContainerFlex>
    </Content>
  </Container>
);

export default Header;
