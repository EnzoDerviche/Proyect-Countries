import React from 'react';
import {useEffect, useState} from 'react';
import Country from '../country/country';
import axios from 'axios';
import Nav from '../Nav/Nav'
import style from './countries.module.css';


export default function Countries(){
    const [country, setCountry] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/countries')
        .then((response) =>
        setCountry(response.data))
    }, [])
    
    return (
        <div className={style.padre}>
            <div className={style.nav}>
                <Nav />
            </div>
            <div className={style.cards}> 
                {country && country.map((country) =>(
                    <Country
                    key={country.id} 
                    name={country.name}
                    id={country.id}
                    continent={country.continent}
                    flag={country.flag}
                    />
                ))}  
            </div>
        </div>
    )
}