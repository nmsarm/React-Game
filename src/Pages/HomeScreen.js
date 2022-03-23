import React from "react";
import { Link } from "react-router-dom";

import '../Styles/HomeScreenStyle.scss';
import '../Styles/ButtonStyle.scss';

const HomeScreen = () => {

    return(
        <>
            <div className="home-container container">
                <p className="home-title">AXIE MEMORY GAME</p>
                <p className="home-description"> BITCH NA PEKE ANG DAMI MONG DADA</p>
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
