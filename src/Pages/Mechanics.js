import React from "react";
import { Link } from "react-router-dom";
import {Howl, Howler} from 'howler';

import '../Styles/MechanicsStyle.scss';
import SoundFx from '../Assets/SoundFX.mp3';

// sound fx
const sound = new Howl({
    src: [SoundFx]
})

Howler.volume(0.1);

const Mechanics = () => {
    return (
        <>
            <div className="mechanics-container">
                <p className="mechanics-title">HOW TO PLAY THE GAME</p>
                <p className="mechanics-description">1. Start the game by selecting a card. <br></br>
                2. Find its match by choosing another card. <br></br>
                3. If the cards don’t match, the flipped cards will be flipped back. <br></br>
                4. Every time a pair of cards is flipped, it counts as one move.<br></br>
                5. In 15 movements, find all of the matches. The game will be over once you run out of moves.</p>
                <Link to ="/" aria-current="page">
                    <button className="backBtn"
                        onClick={sound.play()}>
                            Back
                    </button>
                </Link>
            </div>
        </>
    );
}

export default Mechanics;