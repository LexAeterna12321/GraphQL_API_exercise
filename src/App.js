import React, { useEffect } from "react";
import CharList from "./components/CharList";

import { useQuery } from "@apollo/react-hooks";
import fetchCharsQuery from "./queries/fetchChars";
import SearchForm from "./components/SearchForm";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);
  const { loading, error, data } = useQuery(fetchCharsQuery);

  return (
    <div className="App container">
      <h1 className="center-align">Rick and Morty GraphQL exercise</h1>
      {!loading && data ? (
        <>
          <SearchForm />
          <CharList data={data} />
        </>
      ) : (
        <div></div>
      )}
      {error && <p>{error.message}</p>}
    </div>
  );
}

export default App;
