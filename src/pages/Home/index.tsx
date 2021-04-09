import React, { useEffect, useState } from 'react';
import { Container, Content, ContentCards } from './styles';
import { Card } from '../../components/Card';
import { Pagination } from '../../components/Pagination';
import Img from '../../assets/picachu.png';
import { api } from '../../services/api';

interface IPokemons {
  id: number;
  name: string;
  number: number;
  image: string;
}

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<IPokemons[]>([]);

  useEffect(() => {
    // const loadData = async () => {
    //   const { data } = await api.get('?limit=20&offset=200');
    //   const dta: IPokemons[] = [];
    //   data.results.map(async (details: IPokemons) => {
    //     const res = await api.get(`/${details.name}`);
    //     dta.push(res.data);
    //   });
    // };
    // loadData();
  }, []);

  // console.log('pokemons', pokemons);

  return (
    <Container>
      <Content>
        <ContentCards>
          <Card key={1} id={1} name="Picachu" num={100} image={Img} />
          <Card key={2} id={2} name="Picachu2" num={100} image={Img} />
          <Card key={3} id={3} name="Picachu3" num={100} image={Img} />
          <Card key={4} id={4} name="Picachu4" num={100} image={Img} />
          <Card key={5} id={5} name="Picachu5" num={100} image={Img} />
          <Card key={6} id={6} name="Picachu6" num={100} image={Img} />
        </ContentCards>
        <Pagination />
      </Content>
    </Container>
  );
};

export { Home };
