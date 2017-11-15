import React, { Component } from 'react';
import { Loop, Stage } from 'react-game-kit';

import Hello from '../src/components/Hello';

class App extends Component {
    render() {
        return (
            <div>
                <Loop>
                    <Stage width={1024} height={576}>
                        <Hello />
                    </Stage>
                </Loop>                
            </div>
        );
    }
}

export default App;