import React from 'react';
// import style from './details.module.css';
import Nav from '../Nav/Nav';

export default function Detail({name, continent}){

    return (
            <div>
                <div>
                    <Nav />
                </div>
                    <h1>{name}</h1>
                    <h2>HOLAAAAAAA</h2>
                    <h1>{continent}</h1>
            </div>
    )
}