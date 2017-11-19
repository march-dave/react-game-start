import React, { Component } from 'react';
class Sprite extends Component {

    getImageStyles() {
        const left = this.state.step * tileWidth;
        const top = this.state.state * tileHeight;

        return {
            position: 'absolute',
            transform: `translate(-${left}px, -${top}px)`,
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