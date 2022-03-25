import React from "react";
import '../Styles/GameOverStyles.scss';

const GameOver = () => {
    return (
        <>
            <div className="gameover-container">
                <p className="gameover-title">YOU LOST</p>
                <p className="gameover-description">SCORE: </p>
                <Link to ="/main-game" aria-current="page">
                    <button className= "tryBtn">
                        Try Again
                    </button>
                </Link>
            </div>
        </>
    );
}

export default GameOver;