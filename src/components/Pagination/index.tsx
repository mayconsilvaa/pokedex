import React from 'react';
import { BtnNext, BtnNumber, BtnPrevious, Container } from './styles';

const Pagination: React.FC = () => {
  return (
    <Container>
      <BtnPrevious>Voltar</BtnPrevious>
      <BtnNumber>1</BtnNumber>
      <BtnNext>Avançar</BtnNext>
    </Container>
  );
};

export { Pagination };
