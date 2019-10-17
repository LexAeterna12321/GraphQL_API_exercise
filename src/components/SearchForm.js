import React from "react";
import useInputState from "../hooks/useInputState";
import fetchCharQuery from "../queries/fetchChar";
import { useQuery } from "@apollo/react-hooks";

function SearchForm() {
  const [name, handleChange, reset] = useInputState("");

  const { data, loading, error } = useQuery(fetchCharQuery, {
    variables: { name }
  });
  console.log(data);

  const handleSubmit = e => {
    e.preventDefault();

    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        {!loading &&
          data.characters.results.map(char => <span>{char.name}</span>)}
      </p>
      <div className="row">
        <div className="col s12">
          Search for Char:
          <div className="input-field inline">
            <input
              type="text"
              onChange={handleChange}
              name="charName"
              id="charName"
              className="validate white-text text-darken-2"
              value={name}
            />
            <label htmlFor="charName">ex. Rick</label>
          </div>
          <button type="submit" className="waves-effect waves-teal btn">
            Search
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
