// import React, {Component} from 'react';
// import PropTypes from 'prop-types';

// import {Body} from 'react-game-kit';
// import Matter from 'matter-js';

// export default class Rectangle extends Component {

//   static propTypes = {
//     args: PropTypes.array.isRequired,
//     frictionAir: PropTypes.number
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

//   loop = () => {
//     const {body} = this.body;
//     // console.warn('loop', +new Date(), this.context.loop.loopID);
//     //Do stuff here
//     console.warn('body.position.y',  body.position.y);
//   };

//   update = () => {
//     const {body} = this.body;
//     // console.log('update', +new Date(), this.context.loop.loopID);
//     //Do stuff here
//     this.setState({position: {x: body.position.x, y: body.position.y}});
//     if (body.position.y !== this.props.args[1]) {
//       // console.warn('body.position.y',  body.position.y);
//     }
//   };

//   componentDidMount() {
//     console.warn('componentDidMount');
//     // this.loopID = this.context.loop.subscribe(this.loop);
//     Matter.Events.on(this.context.engine, 'afterUpdate', this.update);
//   }

//   componentWillUnmount() {
//     console.warn('componentWillUnmount');
//     // this.context.loop.unsubscribe(this.loopID);
//     Matter.Events.on(this.context.engine, 'afterUpdate', this.update);
//   }

//   getStyle () {
//     const {size} = this.state;
//     const {w, h} = size;
//     return {
//       backgroundColor: '#444',
//       width: w,
//       height: h
//       // alignItems: 'center',
//       // justifyContent: 'center',
//       // borderRadius: 75 / 2,
//       // height: 75,
//       // width: 75,
//       // position: 'absolute',
//       // transform: [
//       //   { translateX: this.state.ballPosition.x },
//       //   { translateY: this.state.ballPosition.y },
//       //   { rotate: (this.state.ballAngle * (180 / Math.PI)) + 'deg' }
//       // ],
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
//     const {args, frictionAir} = this.props;
//     return (
//       <div title="Rectangle" style={this.getWrapperStyles()}>
//         <Body
//           args={args}
//           friction={0.1}
//           frictionAir={frictionAir}
//           frictionStatic={0.5}
//           shape="rectangle"
//           ref={ref => { this.body = ref; }}
//         >
//           <div style={this.getStyle()} />
//         </Body>
//       </div>
//     )
//   }
// }