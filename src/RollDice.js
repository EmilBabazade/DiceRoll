import React, {Component} from "react";
import Dice from "./Dice";
import './RollDice.css';

function getRandomDice() {
    const die = ['one', 'two', 'three', 'four', 'five', 'six'];
    const randomIndex = Math.floor(Math.random() * 6);
    return die[randomIndex]; 
}

export default class RollDice extends Component {
    state = {
        isClicked: false,
        dice1: 'one',
        dice2: 'six'
    }

    handleClick = () => {
        this.setState({isClicked: true});
        setTimeout(() => 
            this.setState({
                isClicked: false,
                dice1: getRandomDice(),
                dice2: getRandomDice()
            }), 1000);
    }

    render() {
        return (<div className="RollDice">
            <div className='row dice_container'>
                <Dice diceNum={this.state.dice1} className="col-6" shake={this.state.isClicked} />
                <Dice diceNum={this.state.dice2} className="col-6" shake={this.state.isClicked} />
            </div>           
            <button onClick={this.handleClick} disabled={this.state.isClicked}>
                {this.state.isClicked ? 'Rolling...' : 'Roll Dice!'}
            </button>
        </div>);
    }
}