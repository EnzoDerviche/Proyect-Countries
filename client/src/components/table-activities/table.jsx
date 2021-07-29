import React from 'react';
import style from './table.module.css';
import Nav from '../Nav/Nav';
import { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import {getCountryDetail} from "../../actions/index";
import {useParams} from 'react-router-dom';

export default function Table(){
    const details = useSelector((state) => state.countryDetail);
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(getCountryDetail(id)); //dispacha la action con el id pasado por parametro
    }, [id, dispatch]);

    return(
        <div>
            <div>
                <Nav />
            </div>
            <div className={style.padre}>
                <div className={style.contenedor}>
                    {details.activities && details.activities.length > 0 ? 
                            <table className=' table table-striped table-hover'>
                                <thead>
                                    <tr className={style.tr}>
                                        <th>Name</th>
                                        <th>Dificulty</th>
                                        <th>Duration</th>
                                        <th>Season</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {details.activities && 
                                details.activities.map((a) => (
                                    <tr className={style.tr} key={a.id}>
                                        <td className={style.td}>{a.name}</td>
                                        <td className={style.td}>{a.dificulty}</td>
                                        <td className={style.td}>{a.duration} hs</td>
                                        <td className={style.td}>{a.season}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                    : <h3>No activities to show</h3>} 
                </div>
            </div>
            
        </div>
    )
}