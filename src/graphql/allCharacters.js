import { gql } from '@apollo/client';

const ALL_CHARACTERS = gql`
query getAllPeople {
  allPeople {
    people {
      name
      id
      homeworld {
        name
      }
    }
  }
}
`;

export default ALL_CHARACTERS;
