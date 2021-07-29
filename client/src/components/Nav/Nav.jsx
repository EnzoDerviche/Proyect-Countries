import React from 'react';
import {Link} from 'react-router-dom';
import style from './Nav.module.css';
import { IoIosGlobe } from "react-icons/io";

export default function Nav() {
  // acá va tu código
    return (
        <nav className={style.navegador}>
            <div className={style.icon}>
                <IoIosGlobe/>
            </div>
            <ul className={style.lista}>
                <Link style={{ textDecoration: 'none' }} to={'/'}>
                    <li className={style.menu}>Home</li>
                </Link>
                <Link style={{ textDecoration: 'none' }} to='/countries'>
                    <li className={style.menu}>Countries</li>
                </Link>
                <Link style={{ textDecoration: 'none' }} to='/add/activities'>
                    <li className={style.menu}>Add activity</li>
                </Link>
            </ul>
        </nav>
    );
};