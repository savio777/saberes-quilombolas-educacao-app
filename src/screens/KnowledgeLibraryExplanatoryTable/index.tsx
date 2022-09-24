import React, {useState} from 'react';
import {View} from 'react-native';
import {Source} from 'react-native-pdf';

import {BannerKnowledgeLibrary} from '../../components';
import ViewPdf from '../../components/ViewPdf';
import {Container, Content} from './styles';

import QuadroExplicativoPdf01 from '../../assets/pdfs/Quadro_Explicativo_01.pdf';
import QuadroExplicativoPdf02 from '../../assets/pdfs/Quadro_Explicativo_02.pdf';
import QuadroExplicativoPdf03 from '../../assets/pdfs/Quadro_Explicativo_03.pdf';
import QuadroExplicativoPdf04 from '../../assets/pdfs/Quadro_Explicativo_04.pdf';
import QuadroExplicativoPdf05 from '../../assets/pdfs/Quadro_Explicativo_05.pdf';
import QuadroExplicativoPdf06 from '../../assets/pdfs/Quadro_Explicativo_06.pdf';
import QuadroExplicativoPdf07 from '../../assets/pdfs/Quadro_Explicativo_07.pdf';
import QuadroExplicativoPdf08 from '../../assets/pdfs/Quadro_Explicativo_08.pdf';
import QuadroExplicativoPdf09 from '../../assets/pdfs/Quadro_Explicativo_09.pdf';

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
          title="Quadro explicativo 01"
          text=""
          onPress={() =>
            openModal(QuadroExplicativoPdf01, 'Quadro explicativo 01')
          }
        />
        <BannerKnowledgeLibrary
          title="Quadro explicativo 02"
          text=""
          onPress={() =>
            openModal(QuadroExplicativoPdf02, 'Quadro explicativo 02')
          }
        />
        <BannerKnowledgeLibrary
          title="Quadro explicativo 03"
          text=""
          onPress={() =>
            openModal(QuadroExplicativoPdf03, 'Quadro explicativo 03')
          }
        />
        <BannerKnowledgeLibrary
          title="Quadro explicativo 04"
          text=""
          onPress={() =>
            openModal(QuadroExplicativoPdf04, 'Quadro explicativo 04')
          }
        />
        <BannerKnowledgeLibrary
          title="Quadro explicativo 05"
          text=""
          onPress={() =>
            openModal(QuadroExplicativoPdf05, 'Quadro explicativo 05')
          }
        />
        <BannerKnowledgeLibrary
          title="Quadro explicativo 06"
          text=""
          onPress={() =>
            openModal(QuadroExplicativoPdf06, 'Quadro explicativo 06')
          }
        />
        <BannerKnowledgeLibrary
          title="Quadro explicativo 07"
          text=""
          onPress={() =>
            openModal(QuadroExplicativoPdf07, 'Quadro explicativo 07')
          }
        />
        <BannerKnowledgeLibrary
          title="Quadro explicativo 08"
          text=""
          onPress={() =>
            openModal(QuadroExplicativoPdf08, 'Quadro explicativo 08')
          }
        />
        <BannerKnowledgeLibrary
          title="Quadro explicativo 09"
          text=""
          onPress={() =>
            openModal(QuadroExplicativoPdf09, 'Quadro explicativo 09')
          }
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
