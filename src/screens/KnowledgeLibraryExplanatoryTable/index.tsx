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
              title="Descrições conceituais do artigo 68 “Ato das disposições constitucionais transitórias”, Constituição Federal 1988."
              text=""
              onPress={() =>
                openModal(
                  QuadroExplicativoPdf01,
                  'Descrições conceituais do artigo 68 “Ato das disposições constitucionais transitórias”, Constituição Federal 1988.',
                )
              }
            />
            <BannerKnowledgeLibrary
              marginLeft
              title="Art. 215. O Estado garantirá a todos o pleno exercício dos direitos culturais e acesso às fontes da cultura nacional, e apoiará e incentivará a valorização e a difusão das manifestações culturais."
              text=""
              onPress={() =>
                openModal(
                  QuadroExplicativoPdf02,
                  'Art. 215. O Estado garantirá a todos o pleno exercício dos direitos culturais e acesso às fontes da cultura nacional, e apoiará e incentivará a valorização e a difusão das manifestações culturais.',
                )
              }
            />
            <BannerKnowledgeLibrary
              marginLeft
              title="PORTARIA FCP N.o 98, DE 26 DE NOVEMBRO DE 2007"
              text=""
              onPress={() =>
                openModal(
                  QuadroExplicativoPdf03,
                  'PORTARIA FCP N.o 98, DE 26 DE NOVEMBRO DE 2007',
                )
              }
            />
            <BannerKnowledgeLibrary
              marginLeft
              title="CONVENÇÃO N° 169 DA OIT SOBRE POVOS INDÍGENAS E TRIBAIS"
              text=""
              onPress={() =>
                openModal(
                  QuadroExplicativoPdf04,
                  'CONVENÇÃO N° 169 DA OIT SOBRE POVOS INDÍGENAS E TRIBAIS',
                )
              }
            />
            <BannerKnowledgeLibrary
              marginLeft
              title="DECRETO N.o 6.040, DE 7 DE FEVEREIRO DE 2007"
              text=""
              onPress={() =>
                openModal(
                  QuadroExplicativoPdf05,
                  'DECRETO N.o 6.040, DE 7 DE FEVEREIRO DE 2007',
                )
              }
            />
            <BannerKnowledgeLibrary
              marginLeft
              title="LEI No 9.394, DE 20 DE DEZEMBRO DE 1996"
              text=""
              onPress={() =>
                openModal(
                  QuadroExplicativoPdf06,
                  'LEI No 9.394, DE 20 DE DEZEMBRO DE 1996',
                )
              }
            />
            <BannerKnowledgeLibrary
              marginLeft
              title="Parecer CNE/CP no 3, de 10 de março de 2004/ CNE/CEB no 2/2007- Educação das Relações Étnico-raciais"
              text=""
              onPress={() =>
                openModal(
                  QuadroExplicativoPdf07,
                  'Parecer CNE/CP no 3, de 10 de março de 2004/ CNE/CEB no 2/2007- Educação das Relações Étnico-raciais',
                )
              }
            />
            <BannerKnowledgeLibrary
              marginLeft
              title="Resolução CNE/CEB no 8, de 2012: Diretrizes para Educação Escolar Quilombola"
              text=""
              onPress={() =>
                openModal(
                  QuadroExplicativoPdf08,
                  'Resolução CNE/CEB no 8, de 2012: Diretrizes para Educação Escolar Quilombola',
                )
              }
            />
            <BannerKnowledgeLibrary
              marginLeft
              title="Resolução No 189/2020- Diretrizes Para Educação Escolar Quilombola Na Educação Básica Do Maranhão."
              text=""
              onPress={() =>
                openModal(
                  QuadroExplicativoPdf09,
                  'Resolução No 189/2020- Diretrizes Para Educação Escolar Quilombola Na Educação Básica Do Maranhão.',
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
