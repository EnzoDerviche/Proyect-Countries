import React from 'react';
import {Link} from 'react-router-dom';
import style from './country.module.css';

export default function Country({name, id, continent, flag}){

    return (
            <div className={style.card}> 
                <img className={style.img} src={flag} alt="bandera del pais" /> 
                <div className={style.cartas}>         
                        <Link style={{ textDecoration: 'none' }} to={'/details/:id'}>
                            <h2  className={style.name}>{name}</h2>
                        </Link>        
                        <h4 className={style.continent}>{continent}</h4>
                </div>
            </div>
    )
}