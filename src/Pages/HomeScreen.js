import React from "react";
import '../Styles/HomeScreenStyle.scss';
import '../Styles/ButtonStyle.scss';

function HomeScreen() {
    return(
        <>
            <div className="container">
                <p className="title">AXIE MEMORY GAME</p>
                <p className="description"> BITCH NA PEKE ANG DAMI MONG DADA</p>
                <button className="playBtn">Play</button>
            </div>
        </>
    );
}

export default HomeScreen;
