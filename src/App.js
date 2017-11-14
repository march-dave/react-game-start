import React, { Component } from 'react';
import { Loop, Stage } from 'react-game-kit';

class App extends Component {
    render() {
        return (
            <div>
                <Loop>
                    <Stage width={1024} height={576}>
                            
                    </Stage>
                </Loop>

                <h1>Hello World</h1>
            </div>
        );
    }
}

export default App;