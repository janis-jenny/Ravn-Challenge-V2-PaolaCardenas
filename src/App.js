import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import AllCharacters from './components/AllCharacters';
import Navbar from './components/Navbar';
import 'bootswatch/dist/sandstone/bootstrap.min.css';
import './style/index.css';

const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache(),
});

const App = () => (
  <>
    <ApolloProvider client={client}>
      <Navbar />
      <AllCharacters />
    </ApolloProvider>
  </>
);

export default App;
