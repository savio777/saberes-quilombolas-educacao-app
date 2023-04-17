import React, {useState} from 'react';
import {View} from 'react-native';
import {Source} from 'react-native-pdf';

import {BannerKnowledgeLibrary} from '../../components';
import ViewPdf from '../../components/ViewPdf';
import Folder from '../../components/Folder';
import {Container, Content} from './styles';

const Sugestoes_de_musicas_documentarios_e_podcat = {
  uri: 'bundle-assets://pdfs/part_four/Sugestoes_de_musicas_documentarios_e_podcat.pdf',
};

const Minha_mae_e_negra_sim = {
  uri: 'bundle-assets://pdfs/part_four/Minha_mae_e_negra_sim.pdf',
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
          title="Recursos didáticos"
          isOpen={organizacaoDidatica}
          onPress={() => setOrganizacaoDidatica(!organizacaoDidatica)}
        />

        {organizacaoDidatica && (
          <>
            <BannerKnowledgeLibrary
              marginLeft
              title="Sugestões de músicas, documentarios e podcat"
              text=""
              onPress={() =>
                openModal(
                  Sugestoes_de_musicas_documentarios_e_podcat,
                  'Sugestões de músicas, documentarios e podcat',
                )
              }
            />

            <BannerKnowledgeLibrary
              marginLeft
              title="Minha mãe e negra sim"
              text=""
              onPress={() =>
                openModal(Minha_mae_e_negra_sim, 'Minha mãe e negra sim')
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
