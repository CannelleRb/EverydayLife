import React, { Component } from 'react';
import marked from 'marked';

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state= {
            title: ''
        };
    }
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
            </div>
        )
    }
}
export default Movie;