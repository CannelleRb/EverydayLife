import React, { Component } from 'react';
import '../../styles/MovieDetails.css';
import { Link } from "react-router-dom";

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
            <div className="movie-details">
                <img src={this.props.poster_path} alt={this.props.title}/>
                <div className="second-column">
                    <div className="movie-details-information">
                        <h3>{this.props.title}</h3>
                        <span>{this.props.overview}</span>
                    </div>
                    <Link to="/"><button className="button">Retour à la page d'accueil</button></Link>
                </div>
            </div>
        )
    }
}
export default Movie;