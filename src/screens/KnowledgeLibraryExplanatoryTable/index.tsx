import React, {useState} from 'react';
import {View} from 'react-native';
import {Source} from 'react-native-pdf';

import {BannerKnowledgeLibrary} from '../../components';
import ViewPdf from '../../components/ViewPdf';
import Folder from '../../components/Folder';
import {Container, Content} from './styles';

const QuadroExplicativoPdf01 = {
  uri: 'bundle-assets://pdfs/Quadro_Explicativo_01.pdf',
};
const QuadroExplicativoPdf02 = {
  uri: 'bundle-assets://pdfs/Quadro_Explicativo_02.pdf',
};
const QuadroExplicativoPdf03 = {
  uri: 'bundle-assets://pdfs/Quadro_Explicativo_03.pdf',
};
const QuadroExplicativoPdf04 = {
  uri: 'bundle-assets://pdfs/Quadro_Explicativo_04.pdf',
};
const QuadroExplicativoPdf05 = {
  uri: 'bundle-assets://pdfs/Quadro_Explicativo_05.pdf',
};
const QuadroExplicativoPdf06 = {
  uri: 'bundle-assets://pdfs/Quadro_Explicativo_06.pdf',
};
const QuadroExplicativoPdf07 = {
  uri: 'bundle-assets://pdfs/Quadro_Explicativo_07.pdf',
};
const QuadroExplicativoPdf08 = {
  uri: 'bundle-assets://pdfs/Quadro_Explicativo_08.pdf',
};
const QuadroExplicativoPdf09 = {
  uri: 'bundle-assets://pdfs/Quadro_Explicativo_09.pdf',
};

const PlanodeAula08anoQuilombosnoBrasil = {
  uri: 'bundle-assets://pdfs/planos_de_aula/PlanodeAula08anoQuilombosnoBrasil.pdf',
};
const PlanodeAula09Anoreconheciemntodacomunidade = {
  uri: 'bundle-assets://pdfs/planos_de_aula/PlanodeAula09Anoreconheciemntodacomunidade.pdf',
};
const PlanodeAula_SujeitossociaiseinteressesenvolvidosnaaboliçãodaescravidãonoBrasil =
  {
    uri: 'bundle-assets://pdfs/planos_de_aula/PlanodeAula_SujeitossociaiseinteressesenvolvidosnaaboliçãodaescravidãonoBrasil.pdf',
  };
const Planodeaulaparadiscussãosobreopreconceito = {
  uri: 'bundle-assets://pdfs/planos_de_aula/Planodeaulaparadiscussãosobreopreconceito.pdf',
};
const PlanodeaulasobreBrincadeiraafricana = {
  uri: 'bundle-assets://pdfs/planos_de_aula/PlanodeaulasobreBrincadeiraafricana.pdf',
};
const PlanodeaulasobreRacismo = {
  uri: 'bundle-assets://pdfs/planos_de_aula/PlanodeaulasobreRacismo.pdf',
};
const Planodeaulasobreformaderegistros = {
  uri: 'bundle-assets://pdfs/planos_de_aula/Planodeaulasobreformaderegistros.pdf',
};
const Planodeaulasobreidentidadesquilombolas = {
  uri: 'bundle-assets://pdfs/planos_de_aula/Planodeaulasobreidentidadesquilombolas.pdf',
};
const Planodeaulasobreformaçãoculturaldospovos = {
  uri: 'bundle-assets://pdfs/planos_de_aula/Planodeaulasobreformaçãoculturaldospovos.pdf',
};
const Planodeaulasobrerelacõesétnicoraciais = {
  uri: 'bundle-assets://pdfs/planos_de_aula/Planodeaulasobrerelacõesétnicoraciais.pdf',
};

export default () => {
  const [selectedPdf, setSelectedPdf] = useState<Source | undefined>();
  const [selectedPdfTitle, setSelectedPdfTitle] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [quadroExplicativo, setQuadroExplicativo] = useState(false);
  const [planosDeAula, setPlanosDeAula] = useState(false);

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
          title="Quadros Explicativos"
          isOpen={quadroExplicativo}
          onPress={() => setQuadroExplicativo(!quadroExplicativo)}
        />

        {quadroExplicativo && (
          <>
            <BannerKnowledgeLibrary
              marginLeft
              title="Quadro explicativo 01"
              text=""
              onPress={() =>
                openModal(QuadroExplicativoPdf01, 'Quadro explicativo 01')
              }
            />
            <BannerKnowledgeLibrary
              marginLeft
              title="Quadro explicativo 02"
              text=""
              onPress={() =>
                openModal(QuadroExplicativoPdf02, 'Quadro explicativo 02')
              }
            />
            <BannerKnowledgeLibrary
              marginLeft
              title="Quadro explicativo 03"
              text=""
              onPress={() =>
                openModal(QuadroExplicativoPdf03, 'Quadro explicativo 03')
              }
            />
            <BannerKnowledgeLibrary
              marginLeft
              title="Quadro explicativo 04"
              text=""
              onPress={() =>
                openModal(QuadroExplicativoPdf04, 'Quadro explicativo 04')
              }
            />
            <BannerKnowledgeLibrary
              marginLeft
              title="Quadro explicativo 05"
              text=""
              onPress={() =>
                openModal(QuadroExplicativoPdf05, 'Quadro explicativo 05')
              }
            />
            <BannerKnowledgeLibrary
              marginLeft
              title="Quadro explicativo 06"
              text=""
              onPress={() =>
                openModal(QuadroExplicativoPdf06, 'Quadro explicativo 06')
              }
            />
            <BannerKnowledgeLibrary
              marginLeft
              title="Quadro explicativo 07"
              text=""
              onPress={() =>
                openModal(QuadroExplicativoPdf07, 'Quadro explicativo 07')
              }
            />
            <BannerKnowledgeLibrary
              marginLeft
              title="Quadro explicativo 08"
              text=""
              onPress={() =>
                openModal(QuadroExplicativoPdf08, 'Quadro explicativo 08')
              }
            />
            <BannerKnowledgeLibrary
              marginLeft
              title="Quadro explicativo 09"
              text=""
              onPress={() =>
                openModal(QuadroExplicativoPdf09, 'Quadro explicativo 09')
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
