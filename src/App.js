import React from 'react';
import DrumPad from './components/DrumPad';
import {drumArray} from './components/drumKeysArray';
import '@fortawesome/fontawesome-free/js/all.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drumArr: drumArray,
      displayName: "Click pads for sound",
      volume: 0.5,
      power: false,
    };
    this.updateDisplay = this.updateDisplay.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
    this.handlePower = this.handlePower.bind(this);
  }
  updateDisplay(name) {
    this.setState({
      displayName: name,
    });
  }

  changeVolume(e) {
    this.setState({
      volume: e.target.value / 100,
    });
  }

  handlePower() {
    this.setState({
      power: !this.state.power,
    });
  }

  render() {
    return (
      <div id="drum-machine">
        <DrumPad
          currentDrumArr = {this.state.drumArr}
          updateDisplay = {this.updateDisplay}
          playVolume = {this.state.volume}
          power = {this.state.power}/>
        <div
          className={"right-wrapper " + (this.state.power ? "power-on" : "power-off")}>
          <div className="display-tab" id="display">
            {this.state.displayName}
          </div>
          <div className="display-tab" id="sound-display">
            Volume: {Math.round(this.state.volume * 100)}
          </div>
          <input
            type="range"
            id="volumeSlider"
            min="0"
            max="100"
            value={this.state.volume * 100}
            onChange={this.changeVolume}></input>
          <div
            className={"power-tab " + (this.state.power ? "power-on" : "power-off")}
            id="power-btn"onClick={this.handlePower}>
            <i className="fas fa-power-off"></i>
          </div>
          <div className="info">
            <p>freeCodeCamp Project</p>
            <p>
              <a href="#">Drum Machine</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
