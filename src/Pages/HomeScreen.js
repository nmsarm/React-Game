import React from "react";
import { Link } from "react-router-dom";

import '../Styles/HomeScreenStyle.scss';
import '../Styles/ButtonStyle.scss';

function HomeScreen() {
    return(
        <>
            <div className="container">
                <p className="title">AXIE MEMORY GAME</p>
                <p className="description"> BITCH NA PEKE ANG DAMI MONG DADA</p>
                <Link to ="/main-game" aria-current="page">
                    <button className="playBtn">
                        Play
                    </button>
                </Link>
            </div>
        </>
    );
}

export default HomeScreen;
