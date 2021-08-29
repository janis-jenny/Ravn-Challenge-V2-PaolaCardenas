import React from 'react';
import { useQuery } from '@apollo/client';
import ALL_CHARACTERS from '../graphql/allCharacters';
import ItemCharacter from './ItemCharacter';
import Error from './common/Error';
import Loading from './common/Loading';

const AllCharacters = () => {
  const { error, loading, data } = useQuery(ALL_CHARACTERS);

  const characters = () => {
    if (loading) return <Loading />;
    if (error) return <Error />;

    return data.allPeople.people.map((item) => (
      <ItemCharacter
        key={item.id}
        name={item.name}
        origin={item.homeworld.name}
        id={item.id}
      />
    ));
  };

  return (
    <>
      <section>{characters()}</section>
    </>
  );
};

export default AllCharacters;
