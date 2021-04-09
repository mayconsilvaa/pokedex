import React from 'react';
import { Switch } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Detalhes } from '../pages/Home/Detalhes';
import { Route } from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/detalhes/:pokemonId" component={Detalhes} />
  </Switch>
);

export { Routes };
