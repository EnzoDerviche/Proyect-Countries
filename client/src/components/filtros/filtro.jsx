import React from "react";
import style from "./filtro.module.css";
import { useDispatch } from "react-redux";
import {
  filterByContinent,
  sortByPopulation,
  sortAlphabetically,
  filterByActivity
} from "../../actions/index";

export default function Filtro() {
  const dispatch = useDispatch();

  const filterByContinentButton = (name) => {
    dispatch(filterByContinent(name));
  };
  const filterByActivities = (name) => {
    dispatch(filterByActivity(name));
  };

  const sortBy = (filter, order) => { //verifica si el filter es population o alphabet para dispachar la funcion de ordenamiento segun el order
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
        <div className={style.filt}>
          <p className={style.titles}>By Continent</p>
          <hr />
          <button className={style.btn} onClick={() => filterByContinentButton("Americas")}>
            America
          </button>
          <button className={style.btn} onClick={() => filterByContinentButton("Europe")}>
            Europa
          </button>
          <button className={style.btn} onClick={() => filterByContinentButton("Asia")}>Asia</button>
          <button className={style.btn} onClick={() => filterByContinentButton("Oceania")}>
            Oceania
          </button>
          <button className={style.btn} onClick={() => filterByContinentButton("Africa")}>
            Africa
          </button>
        </div>
        <hr />
        <div  className={style.filt}>
          <p className={style.titles}>Others</p>
          <hr />
          <button className={style.btn} onClick={() => sortBy("population", "asc")}>  {/* primer parametro es filter y segundo order */}
            ⇧ Poblation
          </button>
          <button className={style.btn} onClick={() => sortBy("population", "desc")}>
            ⇩ Poblation
          </button>
          <button className={style.btn} onClick={() => sortBy("alphabet", "asc")}>A-Z</button>
          <button className={style.btn} onClick={() => sortBy("alphabet", "desc")}>Z-A</button>
        </div>
        <div  className={style.filt}>
          <p className={style.titles}>Activities</p>
          <hr />
          <button className={style.btn} onClick={() => filterByActivities('Sky')}> 
            Sky
          </button>
          <button className={style.btn} onClick={() => filterByActivities('Futbol')}>
            Futbol
          </button>
          <button className={style.btn} onClick={() => filterByActivities('Hockey')}>
            Hockey
          </button>
          <button className={style.btn} onClick={() => sortBy("alphabet", "asc")}>A-Z</button>
          <button className={style.btn} onClick={() => sortBy("alphabet", "desc")}>Z-A</button>
        </div>
      </div>
    </div>
  );
}