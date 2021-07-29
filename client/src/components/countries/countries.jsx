import React from "react";
import { useEffect } from "react";
import Country from "../country/country";
import Nav from "../Nav/Nav";
import Footer from "../footer/footer";
import style from "./countries.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../../actions/index";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { IoIosArrowBack,  IoIosArrowForward} from "react-icons/io";


import Filtro from "../filtros/filtro";

export default function Countries() {
  const countries = useSelector((state) => state.countriesFiltered);
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(1);

  let buttoninit = false; //Si la pagina es 1 cambia el estado a true para ocultar el btn
  if(page !== 1) {
    buttoninit = true;
  }
  
  let buttonend= false;
  if(page !== 21) {
    buttonend = true;
  }

  let button= false;
  if(countries.length >= 12) {
    button = true;
  }

  const paginate = (countries, page) => {
    //chekeo que sea posible el paginado
    if (countries.length < 12 && countries.length !== 0) {
      return countries; // si no, devuelvo los countries paginados
    }
    //caso contrario, procedo a paginar
    else {
      const offset = page * 12;
      const initial = offset - 12;
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
      <div className={style.title}>
        <h3>App Countries</h3>
      </div>
      <div className={style.filter}>
        <Filtro />
      </div>
      <section className={style.content}>
        <div className={style.box1}>
          <div className={style.buscador}>
            <SearchBar className={style.buscador} />
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
      </section>
      {button ?
        <div className={style.pag}>
        {buttoninit ? <button className={style.btn} onClick={(e) =>handlePage(e)} name='prev'><IoIosArrowBack/></button> : <div className={style.p1}><p className={style.p2}><IoIosArrowBack/></p></div>}
          <p className={style.p2}>{page} de 21</p>
        {buttonend ? <button className={style.btn} onClick={(e) =>handlePage(e)} name='next'><IoIosArrowForward/></button> : <div className={style.p1}><p className={style.p2}><IoIosArrowForward/></p></div>}
        </div> :
        <div></div>
      }
      <section>
        <Footer/>
      </section>
    </div>
  );
}
