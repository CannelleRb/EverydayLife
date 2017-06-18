import React, { Component } from 'react';
import Movie from './Movie';
import { Link } from "react-router-dom";

class MovieList extends Component {
    render() {
        let movies = this.props.data.map(movie => {
            let nb = "/"+movie.id
            return (
                <div>
                    <Movie
                        title={ movie.title }>
                    </Movie>
                    <Link to={nb}>Fiche du film</Link>
                </div>
            )
        })
        return (
            <div>
                { movies }
            </div>
        )
    }
}
export default MovieList;