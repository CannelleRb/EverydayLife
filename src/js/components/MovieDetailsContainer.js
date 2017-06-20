import React, { Component } from 'react';
import axios from 'axios';
import MovieDetails from "./MovieDetails";
import '../../styles/MovieDetailsContainer.css';

class MovieDetailsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {data: [], url: ""};
        this.loadMovieFromServer = this.loadMovieFromServer.bind(this);
        this.loadPosterUrlFromServer = this.loadPosterUrlFromServer.bind(this)
    }

    loadMovieFromServer() {
        let nb = parseInt(this.props.match.params.number, 10);
        let movieUrl = "https://api.themoviedb.org/3/movie/" + nb + "?api_key=f5edf8745b3ada6d299c0f7b21108020&language=fr";
        axios.get(movieUrl)
            .then(res => {
                this.setState({data: res.data})
            })
    };

    loadPosterUrlFromServer() {
        let configUrl = "https://api.themoviedb.org/3/configuration?api_key=f5edf8745b3ada6d299c0f7b21108020";
        axios.get(configUrl)
            .then(res => {
                let url = res.data.images.base_url + res.data.images.poster_sizes[3] + "/";
                this.setState({url: url})
            })
    }

    componentDidMount() {
        this.loadMovieFromServer();
        this.loadPosterUrlFromServer()
    }

    render() {
        let posterPath = this.state.url + this.state.data.poster_path;
        return (
            <div>
                <MovieDetails
                    title={ this.state.data.title }
                    poster_path ={ posterPath }
                    overview={ this.state.data.overview }>
                </MovieDetails>
            </div>
        )
    }
}
export default MovieDetailsContainer