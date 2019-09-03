import React, {Component} from 'react';
import Person from './Components/Person/Person.js';

import './App.css'


class App extends Component {
    state = {
        numbers: []
    };

    numPush = () => {
        const numbers = [];
        while (numbers.length < 5) {
            let randomNumber = Math.floor(Math.random() * (35 - 5 + 1)) + 5;
            if (!numbers.includes(randomNumber)) {
                numbers.push(randomNumber)
            }
        }
        return numbers
    };

    ChangeNumbers = () => {
        this.setState({numbers: this.numPush()})
    };

    render() {
        return (
            <div className="App">
                <Person number={this.state.numbers[0]}/>
                <Person number={this.state.numbers[1]}/>
                <Person number={this.state.numbers[2]}/>
                <Person number={this.state.numbers[3]}/>
                <Person number={this.state.numbers[4]}/>
                <div>
                    <button onClick={this.ChangeNumbers}>New numbers</button>
                </div>
            </div>
        );
    }
}

export default App;
