import React, { Component } from 'react';
import Movie from './Movie';

class MovieList extends Component {
    render() {
        console.log(this.props.data)
        let movies = this.props.data.map(movie => {
            return (
                <Movie
                    title={ movie.title }
                    overview={ movie.overview }>
                </Movie>
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