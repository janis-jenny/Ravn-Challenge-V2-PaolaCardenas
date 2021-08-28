/* eslint-disable no-console */
import React from 'react';
import { useQuery } from '@apollo/client';
import ALL_CHARACTERS from '../graphql/allCharacters';
import ItemCharacter from './ItemCharacter';

const AllCharacters = () => {
  const { error, loading, data } = useQuery(ALL_CHARACTERS);

  /* useEffect(() => {
    console.log(data);
  }, [data]); */
  const characters = () => {
    if (loading) return <div>Loading...</div>;
    if (error) return console.log(error);

    return data.allPeople.people.map((item) => (
      <ItemCharacter
        key={item.id}
        name={item.name}
        origin={item.homeworld.name}
        id={item.id}
      />
    ));
  };

  return (<section>{characters()}</section>);
};

export default AllCharacters;
