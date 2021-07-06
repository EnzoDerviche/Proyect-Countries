import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar.jsx';
import style from './Nav.module.css';
import Logo from '../../img/logito.png';


export default function Nav({onSearch}) {
  // acá va tu código
    return (
        <nav className={style.navegador}>
            <Link to={'/'}>
                <img className={style.logo} src={Logo} alt="countries paises" />
            </Link>
            <ul className={style.lista}>
                <Link style={{ textDecoration: 'none' }} to='/countries'>
                    <li className={style.menu}>Countries</li>
                </Link>
                <Link style={{ textDecoration: 'none' }} to='/activities'>
                    <li className={style.menu}>Activities</li>
                </Link>
            </ul>
            <SearchBar
                className={style.buscador} onSearch={onSearch}
            />
        </nav>
    );
};