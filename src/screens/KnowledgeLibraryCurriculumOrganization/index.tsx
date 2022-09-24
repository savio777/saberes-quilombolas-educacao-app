import React, {useState} from 'react';
import {View} from 'react-native';
import {Source} from 'react-native-pdf';

import {BannerKnowledgeLibrary} from '../../components';
import ViewPdf from '../../components/ViewPdf';
import {Container, Content} from './styles';

import MatrizesCurricularesParaEnsinoFundamentalIIPdf from '../../assets/pdfs/Matrizes_Curriculares_para_Ensino_Fundamental_II.pdf';
import OrientaçõesPdf from '../../assets/pdfs/Orientações.pdf';

export default () => {
  const [selectedPdf, setSelectedPdf] = useState<Source | undefined>();
  const [selectedPdfTitle, setSelectedPdfTitle] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = (pdf: Source, title: string) => {
    setSelectedPdf(pdf);
    setIsOpenModal(true);
    setSelectedPdfTitle(title);
  };

  return (
    <Container>
      <Content>
        <View style={{height: 70}} />

        <BannerKnowledgeLibrary
          title="Matrizes Curriculares para Ensino Fundamental II"
          text=""
          onPress={() =>
            openModal(
              MatrizesCurricularesParaEnsinoFundamentalIIPdf,
              'Matrizes Curriculares para Ensino Fundamental II',
            )
          }
        />
        <BannerKnowledgeLibrary
          title="Orientações"
          text=""
          onPress={() => openModal(OrientaçõesPdf, 'Orientações')}
        />
      </Content>

      <ViewPdf
        visible={isOpenModal}
        source={selectedPdf}
        title={selectedPdfTitle}
        onRequestClose={() => setIsOpenModal(false)}
        close={() => setIsOpenModal(false)}
      />
    </Container>
  );
};
