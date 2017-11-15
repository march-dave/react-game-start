import React, { Component } from 'react';
import { Loop, Stage } from 'react-game-kit';

import Hello from '../src/components/Hello';

class App extends Component {
    render() {
        return (
            <div>
                <Loop>
                    <Stage width={1024} height={576}>
                        <ChildComponent />
                    </Stage>
                </Loop>                
            </div>
        );
    }
}

export default App;

class ChildComponent extends React.Component {
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
  }