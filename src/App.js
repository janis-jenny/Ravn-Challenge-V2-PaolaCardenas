import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import Routes from './Routes';
import 'bootswatch/dist/sandstone/bootstrap.min.css';
import './style/index.css';

const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache(),
});

const App = () => (
  <>
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  </>
);

export default App;
