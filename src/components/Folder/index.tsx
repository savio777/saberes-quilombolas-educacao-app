import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Container, Title} from './styles';

interface FolderProps {
  title: string;
  isOpen: boolean;
  onPress: () => void;
}

const Folder: React.FC<FolderProps> = ({title, isOpen, onPress}) => (
  <Container onPress={onPress}>
    <Icon name={isOpen ? 'folder-open-outline' : 'folder-outline'} size={24} />
    <Title>{title}</Title>
  </Container>
);

export default Folder;
