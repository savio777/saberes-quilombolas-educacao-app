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
