import React from 'react';

import {Modal, ModalProps} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {IFiles} from '../../store/modules/Files';
import {Container, PdfStyled, Header, Title, ButtonClose} from './styles';

interface Props extends ModalProps {
  pdf?: IFiles;
  close(): void;
}

const ViewPdf: React.FC<Props> = ({pdf, close, ...rest}) => {
  return (
    <Modal {...rest} presentationStyle="fullScreen">
      <Container>
        <Header>
          <Title>{pdf?.title}</Title>
          <ButtonClose onPress={close}>
            <Icon name="close" size={25} />
          </ButtonClose>
        </Header>
        <PdfStyled source={{uri: pdf?.uri}} />
      </Container>
    </Modal>
  );
};

export default ViewPdf;
