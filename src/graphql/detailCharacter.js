import { gql } from '@apollo/client';

const DETAIL_CHARACTER = gql`
query getCharacter($id: ID) {
  person($id: ID) {
    name
    eyeColor
    skinColor
    hairColor
    birthYear
    vehicleConnection {
      vehicles {
        id
        name
      }
    }
  }
}
`;

export default DETAIL_CHARACTER;
