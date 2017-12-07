import React, { Component } from 'react';
import { Loop, Stage, World, Body, Sprite } from 'react-game-kit';
import PropTypes from 'prop-types';
import Matter, { Engine, Events } from 'matter-js';

class Hello extends Component {
    constructor(props) {
        super(props);
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

    componentDidMount() {
        Matter.Events.on(this.context.engine, 'afterUpdate', this.update);
    }

    componentWillUnmount() {
        Matter.Events.off(this.context.engine, 'afterUpdate', this.update);
    }


    render() {
        return (
            // <World>
             <World onInit={this.physicsInit}>
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