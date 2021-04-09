import React from 'react';
import {
  Route as ReactDOMRouter,
  RouteProps as ReactDOMRouteProps,
} from 'react-router-dom';
import { Default } from '../pages/_layouts/default';

interface RouteProps extends ReactDOMRouteProps {
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ component: Component, ...rest }) => {
  const Layout = Default;

  return (
    <ReactDOMRouter
      {...rest}
      render={() => {
        return (
          <Layout>
            <Component />
          </Layout>
        );
      }}
    />
  );
};

export { Route };
