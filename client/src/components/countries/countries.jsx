import React from "react";
import { useEffect } from "react";
import Country from "../country/country";
import Nav from "../Nav/Nav";
import style from "./countries.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../../actions/index";
import SearchBar from "../SearchBar/SearchBar.jsx";
import Filtro from "../filtros/filtro";

export default function Countries() {
  const countries = useSelector((state) => state.countriesFiltered);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div className={style.padre}>
      <div className={style.nav}>
        <Nav />
      </div>
      <div className={style.content}>
        <div className={style.box1}>
          <div className={style.buscador}>
            <SearchBar className={style.buscador} />
          </div>
          <div>
            <Filtro />
          </div>
        </div>
        <div className={style.box2}>
          {countries &&
            countries.map((c) => (
              <Country
                key={c.id}
                name={c.name}
                id={c.id}
                continent={c.continent}
                flag={c.flag}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
