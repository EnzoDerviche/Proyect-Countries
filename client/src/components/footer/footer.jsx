import React from "react";
import style from "./footer.module.css";


export default function Footer() {

    return (
        <section className={style.padre}>
            <div className={style.content}>
                <div className={style.box1}>
                    <p className={style.p}>contacto</p>
                </div>
                <div className={style.box2}>
                    <p className={style.p}>tecnologias y api</p>
                </div>
                <div className={style.box3}>
                    <p className={style.p}>redes</p>
                </div>
            </div>
        </section>
    );
}