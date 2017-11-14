import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Loop, Stage } from 'react-game-kit';

class index extends Component {
    render() {
        return (
            <div>
                <Loop>
                    <Stage>

                        <World>
                            <Body>
                                // Sprite go here
                            </Body>

                        </World>
                        
                    </Stage>
                </Loop>
            </div>
        );
    }
}

export default index;