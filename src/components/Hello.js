import React, { Component } from 'react';
import { Loop, Stage, World, Body, Sprite } from 'react-game-kit';
import PropTypes from 'prop-types';
import Matter, { Engine, Events } from 'matter-js';

class Hello extends Component {

    constructor(props) {
        super(props);
        this.state = {
            positionY: 0,
            positionX: 0,
            controller: true,
        }
    }

    static contextTypes = {
        loop: PropTypes.object,
    };

    // physicsInit = engine => {
    //     const ground = Matter.Bodies.rectangle(512 * 3, 448, 1024 * 3, 64, {
    //         isStatic: true,
    //     });

    //     const leftWall = Matter.Bodies.rectangle(-64, 288, 64, 576, {
    //         isStatic: true,
    //     });

    //     const rightWall = Matter.Bodies.rectangle(3008, 288, 64, 576, {
    //         isStatic: true,
    //     });

    //     Matter.World.addBody(engine.world, ground);
    //     Matter.World.addBody(engine.world, leftWall);
    //     Matter.World.addBody(engine.world, rightWall);
    // };

    update = () => {
        // tick logic
    };

    componentDidMount() {
        this.context.loop.subscribe(this.update);
    }

    componentWillUnmount() {
        this.context.loop.unsubscribe(this.update);
    }

    move = (body, x) => {
        Matter.Body.setVelocity(body, { x, y: 0 });
    };

    update = () => {
        const { body } = this.body;
        if (keys.isDown(keys.LEFT)) {
            this.move(body, -5);
        } else if (keys.isDown(keys.RIGHT)) {
            this.move(body, 5);
        }
    };

    render() {
        return (
            // <World onInit={this.physicsInit}>
            <World>
                <Body
                    args={[0, 384, 64, 64, { inertia: Infinity }]}
                    ref={(b) => { this.body = b; }}
                >
                    <Sprite
                        repeat={true}
                        src="assets/character-sprite.png"
                        scale={this.context.scale * 2}
                        state={0}
                        steps={[9, 9, 0, 4, 5]}
                    />
                </Body>

            </World >
        );
    }
}

export default Hello;