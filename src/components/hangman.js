import React, { Component } from 'react';
import './hangman.css';
import { randomWord } from './Words.js';

import step0 from "./images/state1.GIF"
import step1 from "./images/state2.GIF"
import step2 from "./images/state3.GIF"
import step3 from "./images/state4.GIF"
import step4 from "./images/state5.GIF"
import step5 from "./images/state6.GIF"
import step6 from "./images/state7.GIF"
import step7 from "./images/state8.GIF"
import step8 from "./images/state9.GIF"
import step9 from "./images/state10.gif"
import step10 from "./images/state11.GIF"


class hangman extends Component {
    static defaultProps = {
        maxWrong: 11,
        images: [step0, step1, step2, step3, step4, step5, step6, step7, step8, step9, step10]
    }

    constructor(props) {
        super(props);
        this.state = {
            mistake: 0,
            guessed: new Set([]),
            answer: randomWord()
        }
    }

    handleGuess = e => {
        let letter = e.target.value;
        this.setState(st => ({
            guessed: st.guessed.add(letter),
            mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1)
        }));
    }

    guessedWord() {
        return this.state.answer.split("").map(letter => (this.state.guessed.has(letter) ? letter : " _ "));
    }

    generateButtons() {
        return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
            <button
            className='btn btn-lg btn-primary m-2'
            key={letter}
            value={letter}
            onClick={this.handleGuess}
            disabled={this.state.guessed.has(letter)}
            >
                {letter}
            </button>
        ));
    }

    resetButton = () => {
        this.setState({
            mistake: 0,
            guessed: new Set([]),
            answer: randomWord()
        });
    }

    showRules = () => {
        alert("Welcome to Hangman! \n\n" +
              "To play the game, try to guess the letters in the hidden word. " +
              "Each incorrect guess results in a new body part being added to the " +
              "hangman drawing. The game is over when you either correctly guess " +
              "the word, or the hangman is completely drawn. \n\n" +
              "Good luck!")
    }

    render() {
        const gameOver = this.state.mistake >= this.props.maxWrong;
        const isWinner = this.guessedWord().join("") === this.state.answer;
        let gameStat = this.generateButtons();

        if (isWinner) {
            gameStat = "You Won!!!!!"
        }

        if (gameOver) {
            gameStat = "You Lost!!!!!"
        }
        return (
            <div className="Hangman container">
                <h1 className='text-center'>Hangman</h1>
                <div className="float-right">Wrong Guesses: {this.state.mistake} of {this.props.maxWrong}</div>
                <div className="text-center">
                    <img src={this.props.images[this.state.mistake]} alt=""/>
                </div>
                <div className="text-center">
                    <p>Guess my Favourite Foods!</p>
                    <p>
                        {!gameOver ? this.guessedWord() : this.state.answer}
                    </p>
                    <div className='btn-container'>
                    <button className='btn btn-info' onClick={this.showRules}>Help</button>
                    <button className='btn btn-info' onClick={this.resetButton}>Reset</button>
                    </div>
<                   p>{gameStat}</p>
                </div>
            </div>
        )
    }
}
export default hangman;