import React from "react";
import { useEffect } from "react";
import style from "./details.module.css";
import Nav from "../Nav/Nav";
import {useSelector, useDispatch} from "react-redux";
import {getCountryDetail} from "../../actions/index";
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

export default function Details() {
  const details = useSelector((state) => state.countryDetail); //traes el el array de countries filtrados
  const dispatch = useDispatch();
  const {id} = useParams();

  useEffect(() => {
    dispatch(getCountryDetail(id)); //dispacha la action con el id pasado por parametro
  }, [id, dispatch]);

  return (
    <div>
      <div className={style.nav}>
        <Nav />
      </div>
      {details ? //verifica si existen details, sino renderiza el cargando...
          <section>
            <div className={style.padre}>
              <div className={style.hijo1}>
                <div className={style.box1}>
                  <img
                    className={style.flag}
                    src={details.flag}
                    alt="bandera del pais"
                  />
                </div>
                <section className={style.details}>
                  <p className={style.p}>- Name: {details.name}.</p>
                  <p className={style.p}>- Capital: {details.capital}.</p>
                  <p className={style.p}>- Subregion: {details.subregion}.</p>
                  <p className={style.p}>- Area: {details.area} km2.</p>
                  <p className={style.p}>- Poblacion: {details.population}</p>
                </section>
                <div>
                  <Link to={`/activities/${id}`}>
                    <button>Activities</button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
      : <h1>cargando...</h1> }
    </div>
  );
}
