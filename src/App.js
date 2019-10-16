import React from "react";
import CharList from "./components/CharList";

import { useQuery } from "@apollo/react-hooks";
import fetchCharsQuery from "./queries/fetchChars";

function App() {
  const { loading, error, data } = useQuery(fetchCharsQuery);

  return (
    <div className="App container">
      <h1 className="center-align">Rick and Morty GraphQL exercise</h1>
      {!loading && data ? <CharList data={data} /> : <div></div>}
      {error && <p>{error.message}</p>}
    </div>
  );
}

export default App;
