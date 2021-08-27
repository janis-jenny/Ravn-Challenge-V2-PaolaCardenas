/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import './App.css';

const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache(),
});

const App = () => (
  <>
    <ApolloProvider client={client}>
      <h1>Characters</h1>
    </ApolloProvider>
  </>
);

export default App;
