import { gql } from "apollo-boost";

export default gql`
  query {
    characters(page: 2, filter: { name: "rick" }) {
      info {
        count
      }
      results {
        name
      }
    }
    character(id: 1) {
      id
    }
  }
`;
