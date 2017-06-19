import React, { Component } from 'react';
import '../../styles/MovieDetails.css';

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
                <img src={this.props.poster_path} alt={this.props.title}/>
                <h3>{this.props.title}</h3>
                <span>{this.props.overview}</span>
            </div>
        )
    }
}
export default Movie;