import React from "react";
import style from "./Main.module.css"

import StyleContainer from "../common/styles/Container.module.css"
export const Main = () => {
    return (
        <div  className={style.mainBlock}>
            <div className={StyleContainer.container}>
                <div className={style.text}>
                    <span>Hi there</span>
                    <h1>I am Alexander Domanov</h1>
                    <p>Frontend Developer.</p>
                </div>
                <div className={style.photo}>

                </div>
            </div>

        </div>
    )
}