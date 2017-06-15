import React, { Component } from 'react';
import marked from 'marked';

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state= {
            title: '',
            tagline: ''
        };
    }
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <span>{this.props.tagline}</span>
            </div>
        )
    }
}
export default Movie;