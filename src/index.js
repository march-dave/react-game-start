import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Loop, Stage } from 'react-game-kit';

import App from './App';

// class index extends Component {
//     render() {
//         return (
//             <div>
//                 {/* <Loop>
//                     <Stage width={1024} height={576}>

//                             kj

//                     </Stage>
//                 </Loop> */}
//                <App />
//             </div>
//         );
//     }
// }

ReactDOM.render( <App /> , document.getElementById('root'));