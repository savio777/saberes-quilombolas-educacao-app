import React, {useState} from 'react';
import {View} from 'react-native';
import {Source} from 'react-native-pdf';

import {BannerKnowledgeLibrary} from '../../components';
import ViewPdf from '../../components/ViewPdf';
import Folder from '../../components/Folder';

const Parte_01_Questões_iniciais_da_Proposta_Curricular = {
  uri: 'bundle-assets://pdfs/matrizes_curriculares/Parte_01_Questões_iniciais_da_Proposta_Curricular.pdf',
};
const Parte_02_Proposta_Pedagogica = {
  uri: 'bundle-assets://pdfs/matrizes_curriculares/Parte_02_Proposta_Pedagogica.pdf',
};

const Matriz_Curricular_02_com_base_na_BNCC = {
  uri: 'bundle-assets://pdfs/matrizes_curriculares/parte_03/Matriz_Curricular_02_com_base_na_BNCC.pdf',
};

import {Container, Content} from './styles';

export default () => {
  const [selectedPdf, setSelectedPdf] = useState<Source | undefined>();
  const [selectedPdfTitle, setSelectedPdfTitle] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [propostaCurricular3, setPropostaCurricular3] = useState(false);

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
          title="Proposta Curricular para Educação Escolar Quilombola I"
          text=""
          onPress={() =>
            openModal(
              Parte_01_Questões_iniciais_da_Proposta_Curricular,
              'Matrizes Curriculares para Ensino Fundamental II',
            )
          }
        />
        <BannerKnowledgeLibrary
          title="Proposta Curricular para Educação Escolar Quilombola II"
          text=""
          onPress={() => openModal(Parte_02_Proposta_Pedagogica, 'Orientações')}
        />

        <Folder
          title="Proposta Curricular para Educação Escolar Quilombola III"
          isOpen={propostaCurricular3}
          onPress={() => setPropostaCurricular3(!propostaCurricular3)}
        />

        {propostaCurricular3 && (
          <>
            <BannerKnowledgeLibrary
              marginLeft
              title="Matriz Curricular 02 com base na BNCC"
              text=""
              onPress={() =>
                openModal(
                  Matriz_Curricular_02_com_base_na_BNCC,
                  'Matriz Curricular 02 com base na BNCC',
                )
              }
            />
          </>
        )}
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
