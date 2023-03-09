import React, {useState} from 'react';
import {View} from 'react-native';
import {Source} from 'react-native-pdf';

import {BannerKnowledgeLibrary} from '../../components';
import ViewPdf from '../../components/ViewPdf';
import Folder from '../../components/Folder';

import Parte_01_Questões_iniciais_da_Proposta_Curricular from '../../assets/pdfs/matrizes_curriculares/Parte_01_Questões_iniciais_da_Proposta_Curricular.pdf';
import Parte_02_Proposta_Pedagogica from '../../assets/pdfs/matrizes_curriculares/Parte_02_Proposta_Pedagogica.pdf';

// parte 03
import Caderno_de_Orientações_Pedagógicas from '../../assets/pdfs/matrizes_curriculares/parte_03/Caderno_de_Orientações_Pedagógicas.pdf';
import Caderno_Política_de_Educação_EScolar_Quilombola_NEQUI from '../../assets/pdfs/matrizes_curriculares/parte_03/Caderno_Política_de_Educação_EScolar_Quilombola_NEQUI.pdf';
import Caderno_Quilombola from '../../assets/pdfs/matrizes_curriculares/parte_03/Caderno_Quilombola.pdf';
import Diretrizes_Curriculares_Estaduais_para_Educação_Escolar_Quilombola from '../../assets/pdfs/matrizes_curriculares/parte_03/Diretrizes_Curriculares_Estaduais_para_Educação_Escolar_Quilombola.pdf';
import Documento_Curricular_do_Território_do_Maranhão from '../../assets/pdfs/matrizes_curriculares/parte_03/Documento_Curricular_do_Território_do_Maranhão.pdf';
import Matriz_Curricular_01 from '../../assets/pdfs/matrizes_curriculares/parte_03/Matriz_Curricular_01.pdf';
import Matriz_Curricular_02_com_base_na_BNCC from '../../assets/pdfs/matrizes_curriculares/parte_03/Matriz_Curricular_02_com_base_na_BNCC.pdf';
import Orientações from '../../assets/pdfs/matrizes_curriculares/parte_03/Orientações.pdf';
import proposta_quilombola from '../../assets/pdfs/matrizes_curriculares/parte_03/proposta_quilombola.pdf';
import Roteiro_de_aula_para_educação_quilombola from '../../assets/pdfs/matrizes_curriculares/parte_03/Roteiro_de_aula_para_educação_quilombola.pdf';

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
              title="Caderno de Orientações Pedagógicas"
              text=""
              onPress={() =>
                openModal(
                  Caderno_de_Orientações_Pedagógicas,
                  'Caderno de Orientações Pedagógicas',
                )
              }
            />

            <BannerKnowledgeLibrary
              marginLeft
              title="Caderno Quilombola"
              text=""
              onPress={() =>
                openModal(Caderno_Quilombola, 'Caderno Quilombola')
              }
            />

            <BannerKnowledgeLibrary
              marginLeft
              title="Diretrizes Curriculares Estaduais para Educação Escolar Quilombola"
              text=""
              onPress={() =>
                openModal(
                  Diretrizes_Curriculares_Estaduais_para_Educação_Escolar_Quilombola,
                  'Diretrizes Curriculares Estaduais para Educação Escolar Quilombola',
                )
              }
            />

            <BannerKnowledgeLibrary
              marginLeft
              title="Caderno Política de Educação EScolar Quilombola NEQUI"
              text=""
              onPress={() =>
                openModal(
                  Caderno_Política_de_Educação_EScolar_Quilombola_NEQUI,
                  'Caderno Política de Educação EScolar Quilombola NEQUI',
                )
              }
            />

            <BannerKnowledgeLibrary
              marginLeft
              title="Documento Curricular do Território do Maranhão"
              text=""
              onPress={() =>
                openModal(
                  Documento_Curricular_do_Território_do_Maranhão,
                  'Documento Curricular do Território do Maranhão',
                )
              }
            />

            <BannerKnowledgeLibrary
              marginLeft
              title="Matriz Curricular 01"
              text=""
              onPress={() =>
                openModal(Matriz_Curricular_01, 'Matriz Curricular 01')
              }
            />

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

            <BannerKnowledgeLibrary
              marginLeft
              title="Orientações"
              text=""
              onPress={() => openModal(Orientações, 'Orientações')}
            />

            <BannerKnowledgeLibrary
              marginLeft
              title="Proposta quilombola"
              text=""
              onPress={() =>
                openModal(proposta_quilombola, 'Proposta quilombola')
              }
            />

            <BannerKnowledgeLibrary
              marginLeft
              title="Roteiro de aula para educação quilombola"
              text=""
              onPress={() =>
                openModal(
                  Roteiro_de_aula_para_educação_quilombola,
                  'Roteiro de aula para educação quilombola',
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
