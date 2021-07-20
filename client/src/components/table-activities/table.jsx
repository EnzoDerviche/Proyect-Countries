import React from 'react';
import style from './table.module.css';

export default function Table({activities}){
    return(
        <div>
            {activities && activities.length > 0 ?
                    <table className={style.table}>
                        <thead>
                            <tr className={style.tr}>
                                <th>Name</th>
                                <th>Dificulty</th>
                                <th>Duration</th>
                                <th>Season</th>
                            </tr>
                        </thead>
                        <tbody>
                        {activities &&
                        activities.map((a) => (
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
    )
}