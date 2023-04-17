import React, {useState} from 'react';
import {View} from 'react-native';
import {Source} from 'react-native-pdf';

import {BannerKnowledgeLibrary} from '../../components';
import ViewPdf from '../../components/ViewPdf';
import Folder from '../../components/Folder';
import {Container, Content} from './styles';

import QuadroExplicativoPdf01 from '../../assets/pdfs/Quadro_Explicativo_01.pdf';
import QuadroExplicativoPdf02 from '../../assets/pdfs/Quadro_Explicativo_02.pdf';
import QuadroExplicativoPdf03 from '../../assets/pdfs/Quadro_Explicativo_03.pdf';
import QuadroExplicativoPdf04 from '../../assets/pdfs/Quadro_Explicativo_04.pdf';
import QuadroExplicativoPdf05 from '../../assets/pdfs/Quadro_Explicativo_05.pdf';
import QuadroExplicativoPdf06 from '../../assets/pdfs/Quadro_Explicativo_06.pdf';
import QuadroExplicativoPdf07 from '../../assets/pdfs/Quadro_Explicativo_07.pdf';
import QuadroExplicativoPdf08 from '../../assets/pdfs/Quadro_Explicativo_08.pdf';
import QuadroExplicativoPdf09 from '../../assets/pdfs/Quadro_Explicativo_09.pdf';

import PlanodeAula08anoQuilombosnoBrasil from '../../assets/pdfs/planos_de_aula/PlanodeAula08anoQuilombosnoBrasil.pdf';
import PlanodeAula09Anoreconheciemntodacomunidade from '../../assets/pdfs/planos_de_aula/PlanodeAula09Anoreconheciemntodacomunidade.pdf';
import PlanodeAula_SujeitossociaiseinteressesenvolvidosnaaboliçãodaescravidãonoBrasil from '../../assets/pdfs/planos_de_aula/PlanodeAula_SujeitossociaiseinteressesenvolvidosnaaboliçãodaescravidãonoBrasil.pdf';
import Planodeaulaparadiscussãosobreopreconceito from '../../assets/pdfs/planos_de_aula/Planodeaulaparadiscussãosobreopreconceito.pdf';
import PlanodeaulasobreBrincadeiraafricana from '../../assets/pdfs/planos_de_aula/PlanodeaulasobreBrincadeiraafricana.pdf';
import PlanodeaulasobreRacismo from '../../assets/pdfs/planos_de_aula/PlanodeaulasobreRacismo.pdf';
import Planodeaulasobreformaderegistros from '../../assets/pdfs/planos_de_aula/Planodeaulasobreformaderegistros.pdf';
import Planodeaulasobreidentidadesquilombolas from '../../assets/pdfs/planos_de_aula/Planodeaulasobreidentidadesquilombolas.pdf';
import Planodeaulasobreformaçãoculturaldospovos from '../../assets/pdfs/planos_de_aula/Planodeaulasobreformaçãoculturaldospovos.pdf';
import Planodeaulasobrerelacõesétnicoraciais from '../../assets/pdfs/planos_de_aula/Planodeaulasobrerelacõesétnicoraciais.pdf';

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
          title="Quadro Explicativo"
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

        <Folder
          title="Planos de aula"
          isOpen={planosDeAula}
          onPress={() => setPlanosDeAula(!planosDeAula)}
        />

        {planosDeAula && (
          <>
            <BannerKnowledgeLibrary
              marginLeft
              title="Plano de Aula 08 ano Quilombos no Brasil"
              text=""
              onPress={() =>
                openModal(
                  PlanodeAula08anoQuilombosnoBrasil,
                  'Plano de Aula 08 ano Quilombos no Brasil',
                )
              }
            />

            <BannerKnowledgeLibrary
              marginLeft
              title="Plano de Aula 09 Ano reconheciemnto da comunidade"
              text=""
              onPress={() =>
                openModal(
                  PlanodeAula09Anoreconheciemntodacomunidade,
                  'Plano de Aula 09 Ano reconheciemnto da comunidade',
                )
              }
            />

            <BannerKnowledgeLibrary
              marginLeft
              title="Plano de Aula Sujeitos sociais e interesses envolvidos na abolição da escravidão no Brasil"
              text=""
              onPress={() =>
                openModal(
                  PlanodeAula_SujeitossociaiseinteressesenvolvidosnaaboliçãodaescravidãonoBrasil,
                  'Plano de Aula Sujeitos sociais e interesses envolvidos na abolição da escravidão no Brasil',
                )
              }
            />

            <BannerKnowledgeLibrary
              marginLeft
              title="Plano de aula para discussão sobre o preconceito"
              text=""
              onPress={() =>
                openModal(
                  Planodeaulaparadiscussãosobreopreconceito,
                  'Plano de aula para discussão sobre o preconceito',
                )
              }
            />

            <BannerKnowledgeLibrary
              marginLeft
              title="Plano de aula sobre Brincadeira africana"
              text=""
              onPress={() =>
                openModal(
                  PlanodeaulasobreBrincadeiraafricana,
                  'Plano de aula sobre Brincadeira africana',
                )
              }
            />

            <BannerKnowledgeLibrary
              marginLeft
              title="Plano de aula sobre Racismo"
              text=""
              onPress={() =>
                openModal(
                  PlanodeaulasobreRacismo,
                  'Plano de aula sobre Racismo',
                )
              }
            />

            <BannerKnowledgeLibrary
              marginLeft
              title="Plano de aula sobre forma de registros"
              text=""
              onPress={() =>
                openModal(
                  Planodeaulasobreformaderegistros,
                  'Plano de aula sobre forma de registros',
                )
              }
            />

            <BannerKnowledgeLibrary
              marginLeft
              title="Plano de aula sobre identidades quilombolas"
              text=""
              onPress={() =>
                openModal(
                  Planodeaulasobreidentidadesquilombolas,
                  'Plano de aula sobre identidades quilombolas',
                )
              }
            />

            <BannerKnowledgeLibrary
              marginLeft
              title="Plano de aula sobre formação cultural dos povos"
              text=""
              onPress={() =>
                openModal(
                  Planodeaulasobreformaçãoculturaldospovos,
                  'Plano de aula sobre formação cultural dos povos',
                )
              }
            />

            <BannerKnowledgeLibrary
              marginLeft
              title="Plano de aula sobre relacões étnico raciais"
              text=""
              onPress={() =>
                openModal(
                  Planodeaulasobrerelacõesétnicoraciais,
                  'Plano de aula sobre relacões étnico raciais',
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
