import { gql } from "apollo-boost";

export default gql`
  query Char($name: String) {
    characters(filter: { name: $name }) {
      results {
        id
        name
        image
      }
    }
  }
`;
