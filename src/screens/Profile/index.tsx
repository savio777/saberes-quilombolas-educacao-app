import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  TextUnderlined,
  Title,
  Text,
  ButtonContentCenter,
} from './styles';
import PersonEllipseMockupSvg from '../../assets/person-ellipse-mockup.svg';

export default () => {
  const [name, setName] = useState('ERIC SANTOS');
  const [carrer, setCarrer] = useState('PROFESSOR 3° DISTRITO');
  const [carrer2, setCarrer2] = useState('Professor ensino médio');
  const [contentsCount, setContentsCount] = useState(22);

  return (
    <Container>
      <TouchableOpacity>
        <PersonEllipseMockupSvg width={150} height={150} />
      </TouchableOpacity>
      <View>
        <Title>{name}</Title>
        <Title>{carrer}</Title>
        <Title>TOTAL DE CONTEÚDOS SALVOS: {contentsCount}</Title>
        <Title>{carrer2}</Title>
        <TextUnderlined>Editar informações</TextUnderlined>
      </View>

      <ButtonContentCenter>
        <Icon name="file-plus" size={50} color="black" />
        <Text>Adicionar arquivos</Text>
      </ButtonContentCenter>
    </Container>
  );
};
