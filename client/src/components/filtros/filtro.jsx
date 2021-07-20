import React from "react";
import style from "./filtro.module.css";
import { useDispatch } from "react-redux";
import {
  filterByContinent,
  sortByPopulation,
  sortAlphabetically,
} from "../../actions/index";

export default function Filtro() {
  const dispatch = useDispatch();

  const filterByContinentButton = (name) => {
    dispatch(filterByContinent(name));
  };

  const sortBy = (filter, order) => {
    switch (filter) {
      case "population":
        dispatch(sortByPopulation(order));
        break;
      case "alphabet":
        dispatch(sortAlphabetically(order));
        break;
      default:
        break;
    }
  };

  return (
    <div className={style.padre}>
      <div>
        <p className={style.titles}>FILTERED</p>
      </div>
      <div className={style.filters}>
        <div>
          <p className={style.titles}>By Continent</p>
          <hr />
          <button onClick={() => filterByContinentButton("Americas")}>
            America
          </button>
          <button onClick={() => filterByContinentButton("Europe")}>
            Europa
          </button>
          <button onClick={() => filterByContinentButton("Asia")}>Asia</button>
          <button onClick={() => filterByContinentButton("Oceania")}>
            Oceania
          </button>
          <button onClick={() => filterByContinentButton("Africa")}>
            Africa
          </button>
        </div>
        <hr />
        <div>
          <p className={style.titles}>Others</p>
          <hr />
          <button onClick={() => sortBy("population", "asc")}>
            ⇧ Poblation
          </button>
          <button onClick={() => sortBy("population", "desc")}>
            ⇩ Poblation
          </button>
          <button onClick={() => sortBy("alphabet", "asc")}>A-Z</button>
          <button onClick={() => sortBy("alphabet", "desc")}>Z-A</button>
        </div>
      </div>
    </div>
  );
}
