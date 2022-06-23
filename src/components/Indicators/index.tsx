import React, { useEffect, useState } from "react";

import { Container, Indicator } from "./styles";

interface Props {
  arrayLenght: any[];
  selected: number;
}

const Indicators: React.FC<Props> = ({ arrayLenght, selected }) => {
  return (
    <Container>
      {arrayLenght.map((_, index) => (
        <Indicator key={String(index)} full={selected === index + 1} />
      ))}
    </Container>
  );
};

export default Indicators;
