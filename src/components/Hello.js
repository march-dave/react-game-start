import React, { Component } from 'react';
import { Loop, Stage, WorldComponent } from 'react-game-kit';

class Hello extends Component {
    static defaultProps = {
        width: 800,
        height: 800,
    };
    state = {
        gravity: 1
    }

    render() {
        return (
            <Loop>
                <div>Hello World</div>
            </Loop>
        );
    }
}

export default Hello;