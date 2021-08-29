import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import DETAIL_CHARACTER from '../graphql/detailCharacter';
import Info from './Info';
import Vehicles from './Vehicles';
import Error from './common/Error';
import Loading from './common/Loading';
import Navbar from './Navbar';

const Character = () => {
  const { id } = useParams();
  const { error, loading, data } = useQuery(DETAIL_CHARACTER, {
    variables: { id },
  });

  const renderCharacter = () => {
    if (loading) return <Loading />;
    if (error) return <Error />;

    return (
      <div>
        <Navbar title={data.person.name} />
        <Info
          eyeC={data.person.eyeColor}
          hairC={data.person.hairColor}
          skinC={data.person.skinColor}
          birthYear={data.person.birthYear}
        />
        <Vehicles vehicles={data.person.vehicleConnection.vehicles} />
      </div>
    );
  };

  return (
    <>
      <section>{renderCharacter()}</section>
    </>
  );
};

export default Character;
