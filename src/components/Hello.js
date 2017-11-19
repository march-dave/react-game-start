import React, { Component } from 'react';
import { Loop, Stage, WorldComponent, World } from 'react-game-kit';
import PropTypes from 'prop-types';
import Matter, { Engine, Events } from 'matter-js';

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
                <div>Hello World</div>
            </World>
        );
    }
}

export default Hello;