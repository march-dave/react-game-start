import React, { Component } from 'react';
class Sprite extends Component {

    getImageStyles() {
        const scaledWidth = Math.round(this.props.width * this.context.scale);
      
        return {
          width: scaledWidth,
          imageRendering: 'pixelated'
        };
      }

    render() {
        return (
            <div style={{
                width: 64,
                height: 64,
                overflow: 'hidden',
                position: 'relative'
            }}>
                <img src={this.props.src} style={this.getImageStyles()} />
            </div>
        );
    }
}

export default Sprite;