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
  const [page, setPage] = React.useState(1);


  const paginate = (countries, page) => {
    //chekeo que sea posible el paginado
    if (countries.length < 10 && countries.length !== 0) {
      return countries; // si no, devuelvo los countries paginados
    }
    //caso contrario, procedo a paginar
    else {
      const offset = page * 10;
      const initial = offset - 10;
      return countries.slice(initial, offset); // devuelve el array de los 10
    }
  };

  useEffect(() => {
    dispatch(getCountries());
    setPage(1); 
  }, [dispatch]); //esta atento a la modificacion del dispatch

  const handlePage = function (e) { //verifica si la propiedad name es igual a next o prev para setear el estado nuevo
      if(e.target.name === 'next'){
        setPage(page + 1)
      }
      if (e.target.name === 'prev'){
          setPage(page - 1)
      }
}


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
              paginate(countries, page).map((c) => ( //verifica si existe countries y mapea con los diez paginados
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
      <div className={style.pag}>
          <button className={style.btn} onClick={(e) =>handlePage(e)} name='prev'>⇦</button>
            <p><strong>{page}</strong></p>
          <button className={style.btn} onClick={(e) => handlePage(e)} name='next'>⇨</button>
      </div>
    </div>
  );
}
