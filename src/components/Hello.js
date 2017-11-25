import React, { Component } from 'react';
import { Loop, Stage, World, Body, Sprite } from 'react-game-kit';
import PropTypes from 'prop-types';
import Matter, { Engine, Events } from 'matter-js';

class Hello extends Component {
    constructor(props) {
        super(props);

        // const { keys, store } = this.props;
    }

    static propTypes = {
        keys: PropTypes.object,
        onEnterBuilding: PropTypes.func,
        store: PropTypes.object,
    };

    static contextTypes = {
        loop: PropTypes.object,
    };

    move = (body, x) => {
        Matter.Body.setVelocity(body, { x, y: 0 });
    };

    update = () => {
        const { body } = this.body;
        const { keys, store } = this.props;
        // console.log('body: ', body);

        console.log('keys.LEFT');
        // console.log(keys(a));
        if (keys.isDown(keys.LEFT)) {
            // console.log('keys.LEFT');
            //   this.move(body, -5);
            // } else if (keys.isDown(keys.RIGHT)) {
            //   this.move(body, 5);
        }
    };

    componentDidMount() {
        this.context.loop.subscribe(this.update);
    }

    componentWillUnmount() {
        this.context.loop.unsubscribe(this.update);
    }

    render() {
        return (
            // <World onInit={this.physicsInit}>
            <
            World >
            <
            Body args = {
                [0, 384, 64, 64, { inertia: Infinity }] }
            ref = {
                (b) => { this.body = b; } } >
            <
            Sprite repeat = { true }
            src = "assets/character-sprite.png"
            scale = { this.context.scale * 2 }
            state = { 0 }
            steps = {
                [9, 9, 0, 4, 5] }
            /> <
            /Body>

            <
            /World >
        );
    }
}

export default Hello;