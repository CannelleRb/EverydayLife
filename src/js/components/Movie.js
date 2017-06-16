import React, { Component } from 'react';
import marked from 'marked';

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state= {
            title: '',
            overview: ''
        };
    }
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <span>{this.props.overview}</span>
            </div>
        )
    }
}
export default Movie;