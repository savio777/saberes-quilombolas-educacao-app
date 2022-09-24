import React from 'react';

import {Alert, Modal, ModalProps} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Source} from 'react-native-pdf';

import {IFiles} from '../../store/modules/Files';
import colors from '../../helpers/colors';

import {Container, PdfStyled, Header, Title, ButtonClose} from './styles';

interface Props extends ModalProps {
  pdf?: IFiles;
  source?: Source;
  title?: string;
  close(): void;
}

const ViewPdf: React.FC<Props> = ({pdf, close, source, title, ...rest}) => {
  return (
    <Modal {...rest} presentationStyle="fullScreen">
      <Container>
        <Header>
          <Title>{title || pdf?.title}</Title>
          <ButtonClose onPress={close}>
            <Icon name="close" size={25} color={colors.white} />
          </ButtonClose>
        </Header>
        <PdfStyled
          trustAllCerts={false}
          source={source || {uri: pdf?.uri}}
          onError={err => {
            Alert.alert('Erro', 'Problemas ao abrir o PDF');
            console.log({err});
          }}
        />
      </Container>
    </Modal>
  );
};

export default ViewPdf;
