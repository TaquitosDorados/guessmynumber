import React, { Component } from 'react';
import "./Game.css";

class Game extends Component {
    constructor() {
        super();
        this.state = {
            number: "",
            message: "",
            random: generateRandomNumber(100)
        }
    }

handleOnChange = e => {
    const{target:{value}} = e;
    console.log(value);

    if(value.trim()>=0){
        this.setState({
         number: value,
        })
    }
}

handleOnClick = ()=>{
    const number = parseInt(this.state.number);
    const random = parseInt(this.state.random);
    const text = calculateText(number,random);

console.log(random);

    this.setState({message: text});
}

    render() {
        return (
            <div className="game">
                <input type="number" value={this.state.number} onChange={this.handleOnChange}></input>
                <button onClick={this.handleOnClick}>Probar</button>
                <p>{this.state.message}</p>
            </div>
        );
    }
}

export default Game;

function generateRandomNumber(max, min=1){
    return Math.floor(Math.random()*(max-min)+min);
}

function calculateText(number,random){
    if(number===random){
        return "Haz acertado!";
    } else if(number<random){
        return "Muy pequeño";
    } else {
        return "Muy grande";
    }
}