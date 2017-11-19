import React, { Component } from 'react';
class Sprite extends Component {

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