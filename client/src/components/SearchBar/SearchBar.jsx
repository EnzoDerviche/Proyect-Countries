import React, { useState } from "react";
import style from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { getCountriesByName } from "../../actions/index";

export default function SearchBar() {
  const [country, setCountry] = useState("");
  const dispatch = useDispatch();

  return (
    <form
      className={style.searchBar}
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(getCountriesByName(country));
        setCountry("");
      }}
    >
      <input
        className={style.input}
        type="text"
        placeholder="Country..."
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <input className={style.search} type="submit" value="Search" />
    </form>
  );
}
