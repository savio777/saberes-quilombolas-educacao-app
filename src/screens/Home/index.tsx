import React from 'react';
import {View} from 'react-native';

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

export default () => (
  <Container>
    <Content persistentScrollbar>
      {dataMockup.map((item, index) => (
        <BannerHome
          key={String(index)}
          title={item.title}
          subTitle={item.text}
          onPress={() => {}}
        />
      ))}
      <View style={{height: 20}} />
    </Content>
  </Container>
);
