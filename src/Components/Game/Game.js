import React, { Component } from 'react';
import "./Game.css";
import List from "../List";

class Game extends Component {
    constructor() {
        super();
        this.state = {
            number: "",
            message: "",
            random: generateRandomNumber(100),
            clase:  "",
            intentos: [],
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
    const clasess = darClase(number,random);

    console.log(random);

    this.setState({message: text});
    this.setState({clase: clasess});
    this.setState({intentos: 
    [
      ...this.state.intentos,
      {
        number: number,
      }
    ]})

    console.log(this.state.intentos);
}

    render() {
        return (
            <div className="game">
                <input type="number" value={this.state.number} onChange={this.handleOnChange}></input>
                <button onClick={this.handleOnClick}>Probar</button>
                <p className={this.state.clase}>{this.state.message}</p>
                <List tries = {this.state.intentos}/>
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
      }
      else if(random-number < -25){
        return 'Lejos (Mayor)';
      } else if(random-number<-10){

        return 'Cerca (Mayor)';
      } else if(random-number<-5){

        return 'Muy Cerca (Mayor)';
      } else if(random-number< 0){

        return 'Extremadamente Cerca (Mayor)';
      } else if(random-number<5){

        return 'Extremadamente Cerca (Menor)';
      } else if(random-number<10){

        return 'Muy Cerca (Menor)';
      } else if(random-number<25){

        return 'Cerca (Menor)';
      } else {

        return 'Lejos (Menor)';
      }
}

function darClase(number,random){
    if(number===random){
        return "correcto"; 
      }
      else if(random-number < -25){
        return 'incorrecto';
      } else if(random-number<-10){

        return 'cerca';
      } else if(random-number<-5){

        return 'cerca';
      } else if(random-number< 0){

        return 'cerca';
      } else if(random-number<5){

        return 'cerca';
      } else if(random-number<10){

        return 'cerca';
      } else if(random-number<25){

        return 'cerca';
      } else {

        return 'incorrecto';
      }
}