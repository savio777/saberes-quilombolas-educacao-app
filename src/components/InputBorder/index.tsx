import React from 'react';
import {TextInputProps} from 'react-native';

import {Container, Input, Title} from './styles';

interface Props extends TextInputProps {
  title: string;
  titleWidth?: number;
}

const InputBorder: React.FC<Props> = ({
  children,
  title,
  titleWidth,
  ...rest
}) => (
  <Container>
    <Title width={titleWidth}>{title}</Title>
    <Input {...rest} />
  </Container>
);

export default InputBorder;
