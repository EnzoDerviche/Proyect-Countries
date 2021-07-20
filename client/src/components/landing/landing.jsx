import React from 'react';
import style from './landing.module.css';
import {Link} from 'react-router-dom';

function Landing(){
    return (
        <div className={style.container}>
            <div className={style.padre}>
                <h1 className={style.title}>Welcome to my project</h1>
                <Link to='/countries'>
                    <button className={style.button}>ENTER</button>
                </Link>   
            </div>
        </div>
        
    )
}

export default Landing;