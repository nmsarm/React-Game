import React from "react";
import { Link } from "react-router-dom";
import {Howl, Howler} from 'howler';

import '../Styles/HomeScreenStyle.scss';
import '../Styles/ButtonStyle.scss';
import SoundFx from '../Assets/SoundFX.mp3';

// sound fx
const sound = new Howl({
    src: [SoundFx]
})

Howler.volume(0.1);

const HomeScreen = () => {
    
    return(
        <>
            <div className="home-container">
                <p className="home-title">AXIE MATCHING GAME</p>
                <p className="home-description"> TIME TO TEST YOUR MEMORY!</p>
                <Link to ="/main-game" aria-current="page">
                    <button className="playBtn" 
                        onClick={sound.play()}>
                            Start
                    </button>
                </Link>
                <Link to ="/how-to-play" aria-current="page">
                    <button className="mechanicsBtn" 
                        onClick={sound.play()}>
                            How to Play
                    </button>
                </Link>    
            </div>
        </>
    );
}

export default HomeScreen;
