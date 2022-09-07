import React, {useCallback, useState} from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import DocumentPicker from 'react-native-document-picker';
import uuid from 'uuidv4';

import {
  Container,
  TextUnderlined,
  Title,
  Text,
  ButtonContentCenter,
} from './styles';
import PersonEllipseMockupSvg from '../../assets/person-ellipse-mockup.svg';
import {addFile} from '../../store/modules/Files';
import {RootState} from '../../store';
import {isDocumentError} from '../../helpers/utils';

export default () => {
  const dispatch = useDispatch();
  const files = useSelector((state: RootState) => state.files);

  const [name, setName] = useState('ERIC SANTOS');
  const [carrer, setCarrer] = useState('PROFESSOR 3° DISTRITO');
  const [carrer2, setCarrer2] = useState('Professor ensino médio');
  const [contentsCount, setContentsCount] = useState(22);

  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
      });

      dispatch(
        addFile({
          file: {
            id: uuid(),
            uri: response[0]?.uri,
            title: response[0]?.name,
            size: response[0]?.size ? response[0]?.size : 0,
            stored: String(new Date()),
          },
        }),
      );
    } catch (err) {
      if (isDocumentError(err)) {
        console.log('Erro upload pdf', err);
        if (err?.message === 'User canceled document picker') {
          Alert.alert('Atenção', 'Upload do arquivo cancelado');
          return;
        }
      }

      Alert.alert('Erro', 'problema ao fazer upload do arquivo');
    }
  }, []);

  return (
    <Container>
      <TouchableOpacity>
        <PersonEllipseMockupSvg width={150} height={150} />
      </TouchableOpacity>
      <View>
        <Title>{name}</Title>
        <Title>{carrer}</Title>
        <Title>TOTAL DE CONTEÚDOS SALVOS: {files.length}</Title>
        <Title>{carrer2}</Title>
        <TouchableOpacity>
          <TextUnderlined>Editar informações</TextUnderlined>
        </TouchableOpacity>
      </View>

      <ButtonContentCenter onPress={handleDocumentSelection}>
        <Icon name="file-plus" size={50} color="black" />
        <Text>Adicionar arquivos</Text>
      </ButtonContentCenter>
    </Container>
  );
};
