import React, { Component } from 'react';
import { Loop, Stage } from 'react-game-kit';

import Hello from '../src/components/Hello';

class App extends Component {

    static contextTypes = {
        loop: PropTypes.object,
    };

    loop = () => {
        //Do stuff here
    };

    componentDidMount() {
        this.loopID = this.context.loop.subscribe(this.loop);
    }

    componentWillUnmount() {
        this.context.loop.unsubscribe(this.loopID);
    }

    getWrapperStyles() {
        const x = Math.round(this.state.x * this.context.scale);

        return {
            position: 'absolute',
            transform: `translate(${x}px, 0px) translateZ(0)`,
            transformOrigin: 'top left',
        };
    }

    render() {

        let animationFrame;
        const loop = () => {
            // Update logic
            animationFrame = requestAnimationFrame(loop);
        }
        animationFrame = requestAnimationFrame(loop);

        return (
            <Loop>
                <Stage width={1024} height={576}>

                </Stage>
            </Loop>
        );
    }
}


export default App;

class Sprite extends Component {
    render() {
        // return();
    }
    
  }