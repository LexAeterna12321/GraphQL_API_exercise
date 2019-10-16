import { gql } from "apollo-boost";

export default gql`
  query {
    characters {
      results {
        name
        id
        species
        image
        status
      }
    }
  }
`;
