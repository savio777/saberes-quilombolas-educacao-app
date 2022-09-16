import React, {useState} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {BannerHome} from '../../components';
import {textLoremIpsum} from '../../helpers/utils';
import {IFiles} from '../../store/modules/Files';
import {RootState} from '../../store';
import ViewPdf from '../../components/ViewPdf';

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

  const files = useSelector((state: RootState) => state.files);

  const [selectedPdf, setSelectedPdf] = useState<IFiles | undefined>();
  const [openModal, setOpenModal] = useState(false);

  return (
    <Container>
      <Content persistentScrollbar>
        {files.map(file => (
          <BannerHome
            key={file?.id}
            title={file.title}
            subTitle="Estratégias para a sala de aula"
            onPress={() => {
              // navigate('ClassroomStrategies');
              setSelectedPdf(file);
              setOpenModal(true);
            }}
          />
        ))}

        {files.length === 0 &&
          dataMockup.map((item, index) => (
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

      <ViewPdf
        visible={openModal}
        pdf={selectedPdf}
        onRequestClose={() => setOpenModal(false)}
        close={() => setOpenModal(false)}
      />
    </Container>
  );
};
