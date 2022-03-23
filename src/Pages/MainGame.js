import { useEffect, useState } from "react";

import {Howl, Howler} from 'howler';
import SoundFx from '../Assets/SoundFX.mp3';

import Card from "../Components/Card";

// For Modal
import { Modal } from "react-bootstrap";

import '../Styles/MainGameStyle.scss';

import Axie1 from "../Assets/axie1.png"
import Axie2 from "../Assets/axie2.png"
import Axie3 from "../Assets/axie3.png"
import Axie4 from "../Assets/axie4.png"
import Axie5 from "../Assets/axie5.png"
import Axie6 from "../Assets/axie6.png"
import Axie7 from "../Assets/axie7.png"
import Axie8 from "../Assets/axie8.png"
import Axie9 from "../Assets/axie9.png"
import Axie10 from "../Assets/axie10.png"
import { Container } from "react-bootstrap";


// Array of Cards
const cardImages = [
    { "src" : Axie1, matched: false },
    { "src" : Axie2, matched: false },
    { "src" : Axie3, matched: false },
    { "src" : Axie4, matched: false },
    { "src" : Axie5, matched: false },
    { "src" : Axie6, matched: false },
    // { "src" : Axie7, matched: false },
    // { "src" : Axie8, matched: false },
    // { "src" : Axie9, matched: false },
    // { "src" : Axie10, matched: false },
]

const MainGame = () => {

    const [ cards, setCards ] = useState([])
    const [ moves, setMoves ] = useState(0)
    const [ matches, setMatches ] = useState(0)
    const [ choiceOne, setChoiceOne ] = useState(null)
    const [ choiceTwo, setChoiceTwo ] = useState(null)
    const [ disabled, setDisabled ] = useState(false);

    //modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);


    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages] //2 sets
            .sort(() => Math.random() - 0.5 )
            .map((card) => ({ ...card, id: Math.random() }))

        setChoiceOne(null)
        setChoiceTwo(null)
        setCards(shuffledCards)
        setMoves(0)
        setMatches(1)

        console.log("Shuffled/Reset")

    }

    // sound fx
    const sound = new Howl({
        src: [SoundFx]
    })

    Howler.volume(0.1);

    // handle a choice
    const handleChoice = (card) => {
        //if choiceOne is null, then choiceTwo - True. else (not null), choiceOne
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }

    // compare 2 selected cards
    useEffect(() => {
        if( choiceOne && choiceTwo ) {
            setDisabled(true) //disable flip
            
            //if two cards match
            if (choiceOne.src === choiceTwo.src) { 

                //increase matches
                setMatches(prevMatches => prevMatches + 1)

                // update card state - previous card state
                setCards(prevCards => { 
                    //map in new array
                    return prevCards.map(card => { 
                        if (card.src === choiceOne.src) {
                            //return new object
                            return {...card, matched: true} 
                        } else {
                            return card
                        }

                    }) 
                })
                resetMoves()
            } else {
                setTimeout(() => resetMoves(), 1000)
            }

            checkMatches()
        }
    }, [choiceOne, choiceTwo])

    // console.log(cards) - log array

    // reset choices & increase moves
    const resetMoves = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setMoves(prevMoves => prevMoves + 1)
        setDisabled(false)
    }

    // check if card matches === 6
    const checkMatches = () => {
        console.log("Card Matches: " + matches )
        if (matches === cards.length/2) {
            console.log("You found them all in " + (moves + 1) + " moves!"); //di q alam hnghh - call modal/congratulations
            setShow(true)
        } 
    }

    const playAgain = () => {
        shuffleCards()
        handleClose()
    }
    

    // start a new game automatically
    useEffect(() => {
        shuffleCards()
    }, [])
    
    return (
        <div className="container-fluid">
            <h1 className="main-title pt-5 mt-3"> Axie Memory Game </h1>
            <button 
                className="shuffle-btn btn-light rounded shadow mt-4"
                onClick={shuffleCards}
            > 
                Shuffle / Reset
            </button>                  

            <div className="card-grid container pb-4">
                {cards.map(card => (
                   <Card 
                        key={card.id}
                        card={card}
                        handleChoice={handleChoice}
                        // flip categories
                        flipped={card === choiceOne || card === choiceTwo || card.matched}
                        disabled={disabled}
                        onClick={sound.play()}
                    />
                ))}
            </div>
            <p className="text-white mt-4"> Moves: {moves} </p>

            <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
              >
                  <Modal.Header>
                  <Modal.Title>Congratulations!</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                        You found them all in {moves} moves. 
                  </Modal.Body>
                  <Modal.Footer>
                    <button 
                        variant="primary" 
                        onClick={playAgain}
                    >
                        Play Again 
                    </button>
                  </Modal.Footer>
            </Modal>

        </div>
    );
}

export default MainGame;