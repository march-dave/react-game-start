import React, { Component } from 'react';
import { Loop, Stage, WorldComponent, World } from 'react-game-kit';
import PropTypes from 'prop-types';
import Matter, { Engine, Events } from 'matter-js';

// import Body from './Body';
import Sprite from './Sprite';  
class Hello extends Component {

    static contextTypes = {
        loop: PropTypes.object,
    };

    physicsInit = engine => {
        const ground = Matter.Bodies.rectangle(512 * 3, 448, 1024 * 3, 64, {
            isStatic: true,
        });

        const leftWall = Matter.Bodies.rectangle(-64, 288, 64, 576, {
            isStatic: true,
        });

        const rightWall = Matter.Bodies.rectangle(3008, 288, 64, 576, {
            isStatic: true,
        });

        Matter.World.addBody(engine.world, ground);
        Matter.World.addBody(engine.world, leftWall);
        Matter.World.addBody(engine.world, rightWall);
    };

    update = () => {
        // tick logic
    };

    componentDidMount() {
        this.context.loop.subscribe(this.update);
    }

    componentWillUnmount() {
        this.context.loop.unsubscribe(this.update);
    }

    render() {
        return (
            <World onInit={this.physicsInit}>

                {/* <Body args={[0, 0, 75, 75]} ref={(b) => this.body = b.body }> */}
                <Sprite
                    repeat={true}
                    src="assets/character-sprite.png"
                    scale={this.context.scale * 2}
                    state={0}
                    steps={[9, 9, 0, 4, 5]}
                />
                 {/* </Body> */}

            </World >
        );
    }
}

export default Hello;