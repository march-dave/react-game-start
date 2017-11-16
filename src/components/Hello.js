import React, { Component } from 'react';
import { Loop, Stage, World } from 'react-game-kit';

class Hello extends Component {
    render() {
        return (
            <Loop>
                <Stage>
                    <World>
                        <div>Start</div>
                    </World>
                </Stage>
            </Loop>
        );
    }
}

export default Hello;