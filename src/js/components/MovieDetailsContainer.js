import React, { Component } from 'react';
import axios from 'axios';
import Movie from "./Movie";
import { Link } from "react-router-dom";
import MovieDetails from "./MovieDetails";

class MovieDetailsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
        this.loadMovieFromServer = this.loadMovieFromServer.bind(this)
    }

    loadMovieFromServer() {
        let nb = parseInt(this.props.match.params.number, 10);
        let movieUrl = "https://api.themoviedb.org/3/movie/" + nb + "?api_key=f5edf8745b3ada6d299c0f7b21108020&language=fr"
        axios.get(movieUrl)
            .then(res => {
                this.setState({data: res.data})
            })
    }

    componentDidMount() {
        this.loadMovieFromServer();
    }

    render() {
        return (
            <div>
                <MovieDetails
                    title={ this.state.data.title }
                    overview={ this.state.data.overview }>
                </MovieDetails>

                <Link to="/">Retour à la page d'accueil</Link>
            </div>
        )
    }
}
export default MovieDetailsContainer