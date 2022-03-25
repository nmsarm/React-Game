import React from "react";
import '../Styles/Congratulations.scss';

const Congratulations = () => {
    return (
        <>
            <div className="congrats-container">
                <p className="congrats-title">CONGRATULATIONS!</p>
                <p className="congrats-description">SCORE: </p>
                <Link to ="/main-game" aria-current="page">
                    <button className="nextBtn">
                        Play Again
                    </button>
                </Link>
            </div>
        </>
    );
}

export default Congratulations;