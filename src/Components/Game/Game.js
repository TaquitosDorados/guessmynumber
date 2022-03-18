import React, { Component } from 'react';
import "./Game.css";

class Game extends Component {
    constructor() {
        super();
        this.state = {
            number: 0,
            message: "",
            random: generateRandomNumber(100)
        }
    }
    render() {
        return (
            <div className="game">
                <input type="number"></input>
                <button>Probar</button>
                <p>texto</p>
            </div>
        );
    }
}

export default Game;

function generateRandomNumber(max, min=1){
    return Math.floor(Math.random()*(max-min)+min);
}