import React, {useState} from 'react';
import {View} from 'react-native';
import {Source} from 'react-native-pdf';

import {BannerKnowledgeLibrary} from '../../components';
import ViewPdf from '../../components/ViewPdf';
import Folder from '../../components/Folder';
import {Container, Content} from './styles';

const L9394_20_de_dezembro_1996 = {
  uri: 'bundle-assets://pdfs/part_three/L9394_20_de_dezembro_1996.pdf',
};

const pedagogia_do_quilombo = {
  uri: 'bundle-assets://pdfs/part_three/pedagogia_do_quilombo.pdf',
};

const Reorganizacao_da_Educacao_quilombola_para_qualidade = {
  uri: 'bundle-assets://pdfs/part_three/Reorganizacao_da_Educacao_quilombola_para_qualidade.pdf',
};

const Sequencia_didatica_01_reconhecimento = {
  uri: 'bundle-assets://pdfs/part_three/Sequencia_didatica_01_reconhecimento.pdf',
};

// parte 03
const Caderno_de_Orientações_Pedagógicas = {
  uri: 'bundle-assets://pdfs/matrizes_curriculares/parte_03/Caderno_de_Orientações_Pedagógicas.pdf',
};
const Caderno_Política_de_Educação_EScolar_Quilombola_NEQUI = {
  uri: 'bundle-assets://pdfs/matrizes_curriculares/parte_03/Caderno_Política_de_Educação_EScolar_Quilombola_NEQUI.pdf',
};
const Caderno_Quilombola = {
  uri: 'bundle-assets://pdfs/matrizes_curriculares/parte_03/Caderno_Quilombola.pdf',
};
const Diretrizes_Curriculares_Estaduais_para_Educação_Escolar_Quilombola = {
  uri: 'bundle-assets://pdfs/matrizes_curriculares/parte_03/Diretrizes_Curriculares_Estaduais_para_Educação_Escolar_Quilombola.pdf',
};
const Matriz_Curricular_01 = {
  uri: 'bundle-assets://pdfs/matrizes_curriculares/parte_03/Matriz_Curricular_01.pdf',
};

const Orientações = {
  uri: 'bundle-assets://pdfs/matrizes_curriculares/parte_03/Orientações.pdf',
};
const proposta_quilombola = {
  uri: 'bundle-assets://pdfs/matrizes_curriculares/parte_03/proposta_quilombola.pdf',
};
const Roteiro_de_aula_para_educação_quilombola = {
  uri: 'bundle-assets://pdfs/matrizes_curriculares/parte_03/Roteiro_de_aula_para_educação_quilombola.pdf',
};

const Caderno_Pedagogico_para_a_educacao_escolar_quilombola = {
  uri: 'bundle-assets://pdfs/part_two/Caderno_Pedagogico_para_a_educação_escolar_quilombola.pdf',
};

const Oficina_para_organizacao_do_semestre = {
  uri: 'bundle-assets://pdfs/part_two/Caderno_Pedagogico_para_a_educacao_escolar_quilombola.pdf',
};

export default () => {
  const [selectedPdf, setSelectedPdf] = useState<Source | undefined>();
  const [selectedPdfTitle, setSelectedPdfTitle] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [colecoesTextos, setColecoesTextos] = useState(false);

  const openModal = (pdf: Source, title: string) => {
    setSelectedPdf(pdf);
    setIsOpenModal(true);
    setSelectedPdfTitle(title);
  };

  return (
    <Container>
      <Content>
        <View style={{height: 70}} />

        <Folder
          title="Coleções de texto"
          isOpen={colecoesTextos}
          onPress={() => setColecoesTextos(!colecoesTextos)}
        />

        {colecoesTextos && (
          <>
            <BannerKnowledgeLibrary
              marginLeft
              title="L9394 20 de dezembro 1996"
              text=""
              onPress={() =>
                openModal(
                  L9394_20_de_dezembro_1996,
                  'L9394 20 de dezembro 1996',
                )
              }
            />

            <BannerKnowledgeLibrary
              marginLeft
              title="Pedagogia do quilombo"
              text=""
              onPress={() =>
                openModal(pedagogia_do_quilombo, 'Pedagogia do quilombo')
              }
            />

            <BannerKnowledgeLibrary
              marginLeft
              title="Reorganizacao da Educacao quilombola para qualidade"
              text=""
              onPress={() =>
                openModal(
                  Reorganizacao_da_Educacao_quilombola_para_qualidade,
                  'Reorganizacao da Educacao quilombola para qualidade',
                )
              }
            />

            <BannerKnowledgeLibrary
              marginLeft
              title="Sequencia didatica 01 reconhecimento"
              text=""
              onPress={() =>
                openModal(
                  Sequencia_didatica_01_reconhecimento,
                  'Sequencia didatica 01 reconhecimento',
                )
              }
            />

            <BannerKnowledgeLibrary
              marginLeft
              title="Caderno Pedagógico para a educacao escolar quilombola"
              text=""
              onPress={() =>
                openModal(
                  Caderno_Pedagogico_para_a_educacao_escolar_quilombola,
                  'Caderno Pedagógico para a educacao escolar quilombola',
                )
              }
            />

            <BannerKnowledgeLibrary
              marginLeft
              title="Oficina para organização do semestre"
              text=""
              onPress={() =>
                openModal(
                  Oficina_para_organizacao_do_semestre,
                  'Oficina para organização do semestre',
                )
              }
            />

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
              title="Matriz Curricular 01"
              text=""
              onPress={() =>
                openModal(Matriz_Curricular_01, 'Matriz Curricular 01')
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
