import React, { Component } from 'react';
import Movie from './Movie';
import { Link } from "react-router-dom";

class MovieList extends Component {
    render() {
        let movies = this.props.data.map(movie => {
            let nb = "/"+movie.id
            return (
                <div key={ movie.id }>
                    <Movie
                        title={ movie.title }
                        uniqueID={ movie.id }>
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