import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';
import PokemonImg from '../../../assets/picachu.png';

interface IDetails {
  name: string;
  number: number;
}

const Detalhes: React.FC = () => {
  return (
    <Container>
      <Content>
        <div className="content_image">
          <img src={PokemonImg} alt="" />
        </div>
        <div className="content_description">
          <div className="content_details">
            <span>Nome</span>
            <p>Picachu</p>
            <span>Nº</span>
            <p>100</p>
          </div>
          <div className="content_btn">
            <Link to="/">Voltar</Link>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export { Detalhes };
