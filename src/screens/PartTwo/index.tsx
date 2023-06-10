import React, {useState} from 'react';
import {View} from 'react-native';
import {Source} from 'react-native-pdf';

import {BannerKnowledgeLibrary} from '../../components';
import ViewPdf from '../../components/ViewPdf';
import Folder from '../../components/Folder';
import {Container, Content} from './styles';

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

//planos de aula
const Plano_de_aula_sobre_Brincadeira_africana = {
  uri: 'bundle-assets://pdfs/part_two/Plano_de_aula_sobre_Brincadeira_africana.pdf',
};
const Plano_de_aula_sobre_relacoes_etnico_raciais = {
  uri: 'bundle-assets://pdfs/part_two/Plano_de_aula_sobre_relacoes_etnico_raciais.pdf',
};

export default () => {
  const [selectedPdf, setSelectedPdf] = useState<Source | undefined>();
  const [selectedPdfTitle, setSelectedPdfTitle] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [organizacaoDidatica, setOrganizacaoDidatica] = useState(false);
  const [planosAulas, setPlanosAulas] = useState(false);

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
          </>
        )}

        <Folder
          title="Planos de trabalho docente"
          isOpen={planosAulas}
          onPress={() => setPlanosAulas(!planosAulas)}
        />

        {planosAulas && (
          <>
            <BannerKnowledgeLibrary
              marginLeft
              title="Plano de aula sobre Brincadeiras africana"
              text=""
              onPress={() =>
                openModal(
                  Plano_de_aula_sobre_Brincadeira_africana,
                  'Plano de aula sobre Brincadeira africana',
                )
              }
            />

            <BannerKnowledgeLibrary
              marginLeft
              title="Plano de aula sobre relações étnico-raciais"
              text=""
              onPress={() =>
                openModal(
                  Plano_de_aula_sobre_relacoes_etnico_raciais,
                  'Plano de aula sobre relações étnico-raciais',
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
