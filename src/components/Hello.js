import React, { Component } from 'react';
import { Loop, Stage, WorldComponent } from 'react-game-kit';
import PropTypes from 'prop-types';
import Matter, { Engine, Events } from 'matter-js';

class Hello extends Component {

    static contextTypes = {
        loop: PropTypes.object,
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
            <div>Hello World</div>
        );
    }
}

export default Hello;