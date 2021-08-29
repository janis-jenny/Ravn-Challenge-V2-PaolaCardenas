import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import AllCharacters from './components/AllCharacters';
import 'bootswatch/dist/sandstone/bootstrap.min.css';

const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <h1>Characters</h1>
    <AllCharacters />
  </ApolloProvider>
);

export default App;
