import React from "react";
import '../Styles/Congratulations.scss';

const Congratulations = () => {
    return (
        <>
            <div className="container">
                <p className="title">YOU WIN!</p>
                <p className="score">DITO LAGAY SCORE PA-CHANGE NALANG HAHA</p>
                <button className="nextBtn">NEXT</button>
            </div>
        </>
    );
}

export default Congratulations;