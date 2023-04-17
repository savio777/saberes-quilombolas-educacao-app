import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {BannerHome} from '../../components';
import {textLoremIpsum} from '../../helpers/utils';

import AulaBackground1 from '../../assets/aula1.png';
import AulaBackground2 from '../../assets/aula2.png';

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
        <BannerHome
          title="Estratégias para sala de aula"
          subTitle="Apresentação de mapas mentais das principais legislações educacionais quilombola e organização curricular de propostas pedagógicas voltadas para o ambiente escolar quilombola"
          onPress={() => {
            navigate('ClassroomStrategies');
          }}
          source={AulaBackground1}
        />

        <BannerHome
          title="Organizações pedagógicas para educação escolar quilombola"
          subTitle="(Ensino Fundamental II) (Desenvolvimento de planos de trabalho docente e avaliação, demonstrações de sequências didáticas e a explanação de diferentes recursos didáticos e linguagens, que favorecessem o estudo da História das comunidades quilombolas)."
          onPress={() => {
            navigate('PartTwo');
          }}
        />

        <BannerHome
          title="Coleções de textos sobre educação quilombola"
          subTitle="Uma seleção de textos de apoio para discussões sobre identidades, comunidades quilombolas, educação e produção da diferença, dentre outras questões relacionadas à educação escolar quilombola"
          onPress={() => {
            // por enquanto somente para testar novas telas
            navigate('PartThree');
          }}
        />

        <BannerHome
          title="Recursos didáticos para o ensino de História"
          subTitle="Explanação de diferentes recursos didáticos e materiais para ensino de História afro-brasileira para as comunidades quilombolas"
          source={AulaBackground2}
          onPress={() => {
            // por enquanto somente para testar novas telas
            navigate('PartFour');
          }}
        />

        <BannerHome
          title="Materiais de apoio para educação escolar quilombola do Maranhão"
          subTitle=""
          source={AulaBackground2}
          onPress={() => {
            // por enquanto somente para testar novas telas
            navigate('PartFive');
          }}
        />

        <View style={{height: 100}} />
      </Content>
    </Container>
  );
};
