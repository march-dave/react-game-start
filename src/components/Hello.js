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
                <Stage width={width} height={height} style={{ background: '#3a9bdc' }}>
                    <WorldComponent gravity={{ x: 0, y: gravity }}>
                        <Wall args={[0, 0, 800, 5]} />
                        <Wall args={[0, 0, 5, 800]} />
                        <Wall args={[800 - 5, 0, 5, 800]} />
                        <Wall args={[0, 800 - 5, 800, 5]} />
                        <Rectangle args={[200, 100, 60, 60]} frictionAir={0.001} />
                        <Rectangle args={[400, 100, 60, 60]} frictionAir={0.05} />
                        <Rectangle args={[600, 100, 60, 60]} frictionAir={0.1} />
                    </WorldComponent>
                </Stage>

            </Loop>
        );
    }
}

export default Hello;