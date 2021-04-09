import React from 'react';
import { Container, Content, Header } from './styles';
import LogoPokemon from '../../../assets/pk_logo.png';

const Default: React.FC = ({ children }) => {
  return (
    <Container>
      <Header>
        <img src={LogoPokemon} alt="" />
      </Header>
      <Content>{children}</Content>
    </Container>
  );
};

export { Default };
