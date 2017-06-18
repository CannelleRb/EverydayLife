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
                <img src={this.props.poster_path} alt={this.props.title}/>
                <h3>{this.props.title}</h3>
                <span>{this.props.vote_average}/10</span>
            </div>
        )
    }
}
export default Movie;