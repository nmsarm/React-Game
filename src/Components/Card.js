import React from "react";
import '../Styles/CardStyle.scss';
import BACK from "../Assets/BACK.jpg";

export default function Card ({card, handleChoice, flipped, disabled})  {

    const handleClick = () => {
        if (!disabled){
            handleChoice(card)
        } //if disabled, card will not be flipped
    }
    
  return (
    <div className="card">
        <div className={flipped ? "flipped" : ""}>
            <img 
                className="front" 
                src={card.src} 
                alt="card front" 
            /> 
            <img 
                className="back" 
                src={BACK} 
                onClick={handleClick}
                alt="card back" 
            />
        </div>                    
    </div>
  )
}




