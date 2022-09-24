import React, {useState} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';

import {BannerHome} from '../../components';
import ViewPdf from '../../components/ViewPdf';
import {RootState} from '../../store';
import {IFiles} from '../../store/modules/Files';

import {Container, Content, Title} from './styles';

export default () => {
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

        {files.length === 0 && <Title>Nenhum arquivo salvo ainda</Title>}

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
