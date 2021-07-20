import React from "react";
import { useEffect } from "react";
import style from "./details.module.css";
import Nav from "../Nav/Nav";
import {useSelector, useDispatch} from "react-redux";
import {getCountryDetail} from "../../actions/index";
import {useParams} from 'react-router-dom';
import Table from "../table-activities/table";

export default function Details() {
  const details = useSelector((state) => state.countryDetail);
  const dispatch = useDispatch();
  const {id} = useParams();

  useEffect(() => {
    dispatch(getCountryDetail(id));
  }, [id, dispatch]);

  return (
    <div>
      <div className={style.nav}>
        <Nav />
      </div>
      {details ? 
          <section>
            {console.log(details)}
            <div className={style.padre}>
              <div className={style.box1}>
                <img
                  className={style.flag}
                  src={details.flag}
                  alt="bandera del pais"
                />
              </div>
              <div className={style.details}>
                <p className={style.p}>- Name: {details.name}.</p>
                <p className={style.p}>- Capital: {details.capital}.</p>
                <p className={style.p}>- Subregion: {details.subregion}.</p>
                <p className={style.p}>- Area: {details.area} km2.</p>
                <p className={style.p}>- Poblacion: {details.population} residents.</p>
              </div>
              {/* aca va un boton que mande al form de agregar actividad */}
            </div>
          </section>
      : <h1>cargando...</h1> }
    </div>
  );
}
