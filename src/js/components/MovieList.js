import React, { Component } from 'react';
import Movie from './Movie';
import axios from 'axios';
import { Link } from "react-router-dom";

class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {data: ""};
        this.loadPosterUrlFromServer = this.loadPosterUrlFromServer.bind(this)
    }

    loadPosterUrlFromServer() {
        let configUrl = "https://api.themoviedb.org/3/configuration?api_key=f5edf8745b3ada6d299c0f7b21108020"
        axios.get(configUrl)
            .then(res => {
                let url = res.data.images.base_url + res.data.images.poster_sizes[0] + "/"
                this.setState({data: url})
            })
    }

    componentDidMount() {
        this.loadPosterUrlFromServer();
    }
    render() {
        let movies = this.props.data.map(movie => {
            let nb = "/"+movie.id
            let posterPath = this.state.data + movie.poster_path
            return (
                <div key={ movie.id }>
                    <Movie
                        title={ movie.title }
                        poster_path={ posterPath }
                        vote_average={ movie.vote_average }
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