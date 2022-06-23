import React from "react";

import { Container, Text } from "./styles";

interface Props {
  text: string;
  onPress: () => void;
}

const Button: React.FC<Props> = ({ onPress, text }) => (
  <Container onPress={onPress}>
    <Text>{text}</Text>
  </Container>
);

export default Button;
