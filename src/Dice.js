import React, {Component} from "react";
import './Dice.css';

export default class Dice extends Component {
    render() {
        let icon = `fas fa-dice-${this.props.diceNum} fa-6x`;
        if(this.props.shake) {
            icon += ' fa-spin';
        }
        return (<div>
            <i style={{color: '#b412b4c2'}} className={icon}></i>
        </div>);
    }
}