import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

interface IProps {
  id?: number;
  name: string;
  num?: number;
  image?: string;
}

const Card: React.FC<IProps> = ({ id, name, num, image }) => {
  return (
    <Container>
      <div className="card_header">
        <img src={image} alt="pokemon_photo" />
      </div>
      <div className="card_content">
        <span>Nome</span>
        <p>{name}</p>
        <span>Nº</span>
        <p>{num}</p>
        <Link to={`/detalhes/${id}`}>SAIBA MAIS</Link>
      </div>
    </Container>
  );
};

export { Card };
