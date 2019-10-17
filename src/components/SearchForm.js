import React from "react";
import useInputState from "../hooks/useInputState";
function SearchForm() {
  const [value, handleChange, reset] = useInputState("");

  const handleSubmit = e => {
    e.preventDefault();

    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
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
              value={value}
            />
            <label htmlFor="charName">ex. Rick</label>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
