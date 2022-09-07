import React, {useState} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {BannerKnowledgeLibrary} from '../../components';
import {Container, Content, Title} from './styles';
import {RootState} from '../../store';
import ViewPdf from '../../components/ViewPdf';
import {IFiles} from '../../store/modules/Files';

const contentMockup = {
  title: 'Quilombo de Maria Conga em Magé',
  text: 'CARVALHO, Camila Abreu de.',
};

export default () => {
  const {navigate} = useNavigation();

  const files = useSelector((state: RootState) => state.files);

  const [openModal, setOpenModal] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState<IFiles | undefined>();

  return (
    <Container>
      <Content>
        <View style={{height: 70}} />
        <Title>
          Perspectivas afro-brasileiras e indígenas à luz do ensino de história.
        </Title>

        {files.map(file => (
          <BannerKnowledgeLibrary
            key={file?.id}
            title={file.title}
            text={contentMockup.text}
            onPress={() => {
              setSelectedPdf(file);
              setOpenModal(true);
            }}
          />
        ))}

        {/* mockup */}
        {files.length === 0 && (
          <>
            <BannerKnowledgeLibrary
              title={contentMockup.title}
              text={contentMockup.text}
              onPress={() => navigate('LanguageSpace')}
            />
            <BannerKnowledgeLibrary
              title={contentMockup.title}
              text={contentMockup.text}
              onPress={() => navigate('LanguageSpace')}
            />
            <BannerKnowledgeLibrary
              title={contentMockup.title}
              text={contentMockup.text}
              onPress={() => navigate('LanguageSpace')}
            />
            <BannerKnowledgeLibrary
              title={contentMockup.title}
              text={contentMockup.text}
              onPress={() => navigate('LanguageSpace')}
            />
            <BannerKnowledgeLibrary
              title={contentMockup.title}
              text={contentMockup.text}
              onPress={() => navigate('LanguageSpace')}
            />
            <BannerKnowledgeLibrary
              title={contentMockup.title}
              text={contentMockup.text}
              onPress={() => navigate('LanguageSpace')}
            />
          </>
        )}
      </Content>

      <ViewPdf
        visible={openModal}
        pdf={selectedPdf}
        onRequestClose={() => setOpenModal(false)}
        close={() => setOpenModal(false)}
      />
    </Container>
  );
};
