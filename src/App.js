import React, { Component } from 'react';
import { Loop, Stage, World, Body } from 'react-game-kit';
import PropTypes from 'prop-types';

import GameLoop from '../src/utils/game-loop';


import Hello from '../src/components/Hello';
import Sprite from '../src/components/Sprite';
// import Matter from 'Matter-js';

class App extends Component {

    // static contextTypes = {
    //     loop: PropTypes.object,
    // };

    constructor(props) {
        super(props);
    }

    // loop = () => {
    //     //Do stuff here
    // };

    // componentDidMount() {
    //     this.loopID = this.context.loop.subscribe(this.loop);
    // }

    // componentWillUnmount() {
    //     this.context.loop.unsubscribe(this.loopID);
    // }

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
                    
                        {/* <Body args={[0,0,75,75]} ref={(b) => this.body = b.body}> */}
                        {/* <Sprite
                            repeat={true}
                            src="assets/character-sprite.png"
                            scale={this.context.scale * 2}
                            state={0}
                            steps={[9, 9, 0, 4, 5]}
                        /> */}
                        {/* </Body> */}
                        <Hello />
                    
                </Stage>
            </Loop>
        );
    }
}


export default App;