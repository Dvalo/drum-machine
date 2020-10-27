import React from 'react';
import DrumPadKey from './DrumPadKey';

class DrumPad extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let padBase = this.props.currentDrumArr.map((currentDrum, i) => {
        return (
            <DrumPadKey
            drumKeyCode={currentDrum.keyCode}
            drumKeyTrigger={currentDrum.keyTrigger}
            drumKeyId={currentDrum.id}
            drumKeyUrl={currentDrum.url}
            updateDisplay={this.props.updateDisplay}
            playVolume={this.props.playVolume}
            power={this.props.power}/>
        );
        });

        return (
        <div
            id="drum-base"
            className={this.props.power ? "power-on" : "power-off"}>
            {padBase}
        </div>
        );
    }
}


export default DrumPad;