// import React, {Component} from 'react';
// import PropTypes from 'prop-types';

// import {Body} from 'react-game-kit';

// export default class Wall extends Component {

//   static propTypes = {
//     args: PropTypes.array.isRequired
//   }

//   static contextTypes = {
//     loop: PropTypes.object,
//     engine: PropTypes.object,
//     scale: PropTypes.number,
//   };

//   state = {
//     position: {
//       x: this.props.args[0],
//       y: this.props.args[1]
//     },
//     size: {
//       w: this.props.args[2],
//       h: this.props.args[3]
//     }
//   }

//   getStyle () {
//     const {size} = this.state;
//     const {w, h} = size;
//     return {
//       backgroundColor: 'red',
//       width: w,
//       height: h
//     }
//   }

//   getWrapperStyles() {
//     const {position} = this.state;
//     const {scale} = this.context;
//     const {x, y} = position;
//     return {
//       position: 'absolute',
//       transform: `translate(${x * scale}px, ${y * scale}px)`,
//       transformOrigin: 'left top',
//     };
//   }

//   render() {
//     const {args} = this.props;
//     return (
//       <div title="Wall" style={this.getWrapperStyles()}>
//         <Body
//           args={args}
//           isStatic={true}
//           friction={0.1}
//           frictionStatic={0.5}
//           shape="rectangle"
//         >
//           <div style={this.getStyle()} />
//         </Body>
//       </div>
//     )
//   }
// }