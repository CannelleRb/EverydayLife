import React, { Component } from 'react';
import '../../styles/Movie.css'
import { Link } from "react-router-dom";

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state= {
            title: ''
        };
    }
    render() {
        let nb = "/"+this.props.uniqueID
        /*let sectionStyle = {
            width: "100%",
            height: "100%",
            backgroundImage: "url(" + posterPath + ")"
        };*/
        return (
            <div className="movie">
                <Link to={nb} className="link">
                <img src={this.props.poster_path} alt={this.props.title}/>
                <div className="movie-information">
                    <h3>{this.props.title}</h3>
                    <span>{this.props.vote_average}/10</span>
                </div>
                </Link>
            </div>
        )
    }
}
export default Movie;