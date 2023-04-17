import React, {useState} from 'react';
import {View} from 'react-native';
import {Source} from 'react-native-pdf';

import {BannerKnowledgeLibrary} from '../../components';
import ViewPdf from '../../components/ViewPdf';
import Folder from '../../components/Folder';
import {Container, Content} from './styles';

const Artigo_sobre_a_educacao_escolar_quilombola_no_Maranhao = {
  uri: 'bundle-assets://pdfs/part_five/Artigo_sobre_a_educacao_escolar_quilombola_no_Maranhao.pdf',
};

const O_ENSINO_DE_HISTORIA_E_CULTURA_AFRO_BRASILEIRANO_MARANHAO_ALGUMAS_CONSIDERAÇÕES_SOBRE_A_RELAÇÃO_DA_EDUCAÇÃO_QUILOMBOLA_E_A_FORMACAO_INICIAL_E_CONTINUADA =
  {
    uri: 'bundle-assets://pdfs/part_five/O_ENSINO_DE_HISTORIA_E_CULTURA_AFRO_BRASILEIRANO_MARANHAO_ALGUMAS_CONSIDERAÇÕES_SOBRE_A_RELAÇÃO_DA_EDUCAÇÃO_QUILOMBOLA_E_A_FORMACAO_INICIAL_E_CONTINUADA.pdf',
  };

const PRATICA_PEDAGOGICA_EM_ESCOLAS_DE_COMUNIDADES_QUILOMBOLAS_DO_MARANHAO = {
  uri: 'bundle-assets://pdfs/part_five/PRATICA_PEDAGOGICA_EM_ESCOLAS_DE_COMUNIDADES_QUILOMBOLAS_DO_MARANHAO.pdf',
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
          title="Materiais de apoio"
          isOpen={organizacaoDidatica}
          onPress={() => setOrganizacaoDidatica(!organizacaoDidatica)}
        />

        {organizacaoDidatica && (
          <>
            <BannerKnowledgeLibrary
              marginLeft
              title="Artigo sobre a educação escolar quilombola no Maranhão"
              text=""
              onPress={() =>
                openModal(
                  Artigo_sobre_a_educacao_escolar_quilombola_no_Maranhao,
                  'Artigo sobre a educação escolar quilombola no Maranhão',
                )
              }
            />

            <BannerKnowledgeLibrary
              marginLeft
              title="O ENSINO DE HISTORIA E CULTURA AFRO BRASILEIRANO MARANHAO ALGUMAS CONSIDERAÇÕES SOBRE A RELAÇÃO DA EDUCAÇÃO QUILOMBOLA E A FORMACAO INICIAL E CONTINUADA"
              text=""
              onPress={() =>
                openModal(
                  O_ENSINO_DE_HISTORIA_E_CULTURA_AFRO_BRASILEIRANO_MARANHAO_ALGUMAS_CONSIDERAÇÕES_SOBRE_A_RELAÇÃO_DA_EDUCAÇÃO_QUILOMBOLA_E_A_FORMACAO_INICIAL_E_CONTINUADA,
                  'O ENSINO DE HISTORIA E CULTURA AFRO BRASILEIRANO MARANHAO ALGUMAS CONSIDERAÇÕES SOBRE A RELAÇÃO DA EDUCAÇÃO QUILOMBOLA E A FORMACAO INICIAL E CONTINUADA',
                )
              }
            />

            <BannerKnowledgeLibrary
              marginLeft
              title="PRÁTICA PEDAGÓGICA EM ESCOLAS DE COMUNIDADES QUILOMBOLAS DO MARANHÃO"
              text=""
              onPress={() =>
                openModal(
                  PRATICA_PEDAGOGICA_EM_ESCOLAS_DE_COMUNIDADES_QUILOMBOLAS_DO_MARANHAO,
                  'PRÁTICA PEDAGÓGICA EM ESCOLAS DE COMUNIDADES QUILOMBOLAS DO MARANHÃO',
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
