import React, {useState} from 'react';
import {View} from 'react-native';
import {Source} from 'react-native-pdf';

import {BannerKnowledgeLibrary} from '../../components';
import ViewPdf from '../../components/ViewPdf';
import Folder from '../../components/Folder';
import {Container, Content} from './styles';

const Caderno_Pedagogico_para_a_educacao_escolar_quilombola = {
  uri: 'bundle-assets://pdfs/part_two/Caderno_Pedagogico_para_a_educação_escolar_quilombola.pdf',
};

const Oficina_para_organizacao_do_semestre = {
  uri: 'bundle-assets://pdfs/part_two/Caderno_Pedagogico_para_a_educacao_escolar_quilombola.pdf',
};

const Sequencia_sobre_prenconceito = {
  uri: 'bundle-assets://pdfs/part_two/Sequência_sobre_prenconceito.pdf',
};

// organizacoes_didaticas
const Caderno_Pedagógico_para_a_educação_escolar_quilombola = {
  uri: 'bundle-assets://pdfs/organizacoes_didaticas/Caderno_Pedagógico_para_a_educação_escolar_quilombola.pdf',
};
const Oficina_para_organização_do_semestre = {
  uri: 'bundle-assets://pdfs/organizacoes_didaticas/Oficina_para_organização_do_semestre.pdf',
};
const Sequência_05_ensino_descolonial_na_perspectiva_da_disciplina_de_História =
  {
    uri: 'bundle-assets://pdfs/organizacoes_didaticas/Sequência_05_ensino_descolonial_na_perspectiva_da_disciplina_de_História.pdf',
  };
const Sequência_07_Quilombos = {
  uri: 'bundle-assets://pdfs/organizacoes_didaticas/Sequência_07_Quilombos.pdf',
};
const Sequência_didática_01_reconhecimento = {
  uri: 'bundle-assets://pdfs/organizacoes_didaticas/Sequência_didática_01_reconhecimento.pdf',
};
const Sequência_didática_02_como_utilização_gamificação_em_sala_de_aula = {
  uri: 'bundle-assets://pdfs/organizacoes_didaticas/Sequência_didática_02_como_utilização_gamificação_em_sala_de_aula.pdf',
};
const Sequência_didática_03_Identificação = {
  uri: 'bundle-assets://pdfs/organizacoes_didaticas/Sequência_didática_03_Identificação.pdf',
};
const Sequência_didática_04_Identificação = {
  uri: 'bundle-assets://pdfs/organizacoes_didaticas/Sequência_didática_04_Identificação.pdf',
};
const Sequência_sobre_prenconceito = {
  uri: 'bundle-assets://pdfs/organizacoes_didaticas/Sequência_sobre_prenconceito.pdf',
};
const sequência_06_sobre_as_terras_quilombolas_e_seu_uso = {
  uri: 'bundle-assets://pdfs/organizacoes_didaticas/sequência_06_sobre_as_terras_quilombolas_e_seu_uso.pdf',
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

export default () => {
  const [selectedPdf, setSelectedPdf] = useState<Source | undefined>();
  const [selectedPdfTitle, setSelectedPdfTitle] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [organizacaoDidatica, setOrganizacaoDidatica] = useState(false);

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
          title="Organização didática"
          isOpen={organizacaoDidatica}
          onPress={() => setOrganizacaoDidatica(!organizacaoDidatica)}
        />

        {organizacaoDidatica && (
          <>
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
              title="Sequência sobre prenconceito"
              text=""
              onPress={() =>
                openModal(
                  Sequencia_sobre_prenconceito,
                  'Sequencia sobre prenconceito',
                )
              }
            />

            <BannerKnowledgeLibrary
              marginLeft
              title="Caderno Pedagógico para a educação escolarquilombola"
              text=""
              onPress={() =>
                openModal(
                  Caderno_Pedagógico_para_a_educação_escolar_quilombola,
                  'Caderno Pedagógico para a educação escolarquilombola',
                )
              }
            />

            <BannerKnowledgeLibrary
              marginLeft
              title="Oficina para organização do semestre"
              text=""
              onPress={() =>
                openModal(
                  Oficina_para_organização_do_semestre,
                  'Oficina para organização do semestre',
                )
              }
            />

            <BannerKnowledgeLibrary
              marginLeft
              title="Sequência 05 ensino descolonial na perspectiva da disciplina de História"
              text=""
              onPress={() =>
                openModal(
                  Sequência_05_ensino_descolonial_na_perspectiva_da_disciplina_de_História,
                  'Sequência 05 ensino descolonial na perspectiva da disciplina de História',
                )
              }
            />

            <BannerKnowledgeLibrary
              marginLeft
              title="Sequência 07 Quilombos"
              text=""
              onPress={() =>
                openModal(Sequência_07_Quilombos, 'Sequência 07 Quilombos')
              }
            />

            <BannerKnowledgeLibrary
              marginLeft
              title="Sequência didática 01 reconhecimento"
              text=""
              onPress={() =>
                openModal(
                  Sequência_didática_01_reconhecimento,
                  'Sequência didática 01 reconhecimento',
                )
              }
            />

            <BannerKnowledgeLibrary
              marginLeft
              title="Sequência didática 02 como utilização gamificação em sala de aula"
              text=""
              onPress={() =>
                openModal(
                  Sequência_didática_02_como_utilização_gamificação_em_sala_de_aula,
                  'Sequência didática 02 como utilização gamificação em sala de aula',
                )
              }
            />

            <BannerKnowledgeLibrary
              marginLeft
              title="Sequência didática 03 Identificação"
              text=""
              onPress={() =>
                openModal(
                  Sequência_didática_03_Identificação,
                  'Sequência didática 03 Identificação',
                )
              }
            />

            <BannerKnowledgeLibrary
              marginLeft
              title="Sequência didática 04 Identificação"
              text=""
              onPress={() =>
                openModal(
                  Sequência_didática_04_Identificação,
                  'Sequência didática 04 Identificação',
                )
              }
            />

            <BannerKnowledgeLibrary
              marginLeft
              title="Sequência sobre prenconceito"
              text=""
              onPress={() =>
                openModal(
                  Sequência_sobre_prenconceito,
                  'Sequência sobre prenconceito',
                )
              }
            />

            <BannerKnowledgeLibrary
              marginLeft
              title="Sequência 06 sobre as terras quilombolas e seu uso"
              text=""
              onPress={() =>
                openModal(
                  sequência_06_sobre_as_terras_quilombolas_e_seu_uso,
                  'sequência 06 sobre as terras quilombolas e seu uso',
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
