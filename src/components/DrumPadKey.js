import React from 'react';

class DrumPadKey extends React.Component {
    constructor(props) {
        super(props);
        this.audioHandler = React.createRef();
        this.activateDrumPad = this.activateDrumPad.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }
    activateDrumPad() {
        const keyPad = this.audioHandler.current;
        keyPad.currentTime = 0;
        keyPad.volume = this.props.playVolume;
        keyPad.play();
        this.props.updateDisplay(this.props.drumKeyId);
    }
    onKeyDown(event) {
        if(this.props.power) {
            if (event.keyCode === this.props.drumKeyCode) {
                this.activateDrumPad();
            }
        }
    }
    render() {
        return (
        <div
            className="drum-pad"
            onClick={this.activateDrumPad}
            id={this.props.drumKeyId}
            onKeyDown={document.addEventListener("keydown", this.onKeyDown)}>
            <audio
            className="clip"
            id={this.props.drumKeyTrigger}
            src={this.props.drumKeyUrl}
            ref={this.audioHandler}></audio>
            {this.props.drumKeyTrigger}
        </div>
        );
    }
}

export default DrumPadKey;