import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {BannerHome} from '../../components';
import {textLoremIpsum} from '../../helpers/utils';

import {Container, Content} from './styles';

const dataMockup = [
  {title: 'Estratégias para sala de aula', text: textLoremIpsum},
  {title: 'Estratégias para sala de aula', text: textLoremIpsum},
  {title: 'Estratégias para sala de aula', text: textLoremIpsum},
  {title: 'Estratégias para sala de aula', text: textLoremIpsum},
  {title: 'Estratégias para sala de aula', text: textLoremIpsum},
  {title: 'Estratégias para sala de aula', text: textLoremIpsum},
];

export default () => {
  const {navigate} = useNavigation();

  return (
    <Container>
      <Content persistentScrollbar>
        {dataMockup.map((item, index) => (
          <BannerHome
            key={String(index)}
            title={item.title}
            subTitle={item.text}
            onPress={() => {
              // por enquanto somente para testar novas telas
              navigate('ClassroomStrategies');
            }}
          />
        ))}
        <View style={{height: 20}} />
      </Content>
    </Container>
  );
};
