import React, { Component } from 'react';
import { Loop, Stage, World, Body } from 'react-game-kit';
import PropTypes from 'prop-types';
import GameLoop from '../src/utils/game-loop';
import Hello from '../src/components/Hello';

class App extends Component {

    constructor(props) {
        super(props);
    }

    // getWrapperStyles() {
    //     const x = Math.round(this.state.x * this.context.scale);

    //     return {
    //         position: 'absolute',
    //         transform: `translate(${x}px, 0px) translateZ(0)`,
    //         transformOrigin: 'top left',
    //     };
    // }

    render() {

        return (
            <Loop>
                <Stage width={1024} height={576}>
                    <Hello />
                </Stage>
            </Loop>
        );
    }
}

export default App;