import React, { Component } from 'react';
import axios from 'axios';
import MovieList from './MovieList';

class MovieContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.loadMoviesFromServer = this.loadMoviesFromServer.bind(this);
    }
    loadMoviesFromServer() {
        axios.get(this.props.url)
            .then(res => {
                this.setState({ data: res.data.results });
            })
    }
    componentDidMount() {
        this.loadMoviesFromServer();
        setInterval(this.loadMoviesFromServer, this.props.pollInterval);
    }
    render() {
        return (
            <div>
                <h2>Films: </h2>
                <MovieList
                    data={ this.state.data }/>
            </div>
        )
    }
}
export default MovieContainer;