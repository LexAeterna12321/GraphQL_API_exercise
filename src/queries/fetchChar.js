import { gql } from "apollo-boost";

export default gql`
  query {
    character(id: 1) {
      id
    }
  }
`;
