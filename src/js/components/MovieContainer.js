import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie';

class MovieContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.loadMoviesFromServer = this.loadMoviesFromServer.bind(this);
    }
    loadMoviesFromServer() {
        axios.get(this.props.url)
            .then(res => {
                this.setState({ data: res.data });
            })
    }
    componentDidMount() {
        this.loadMoviesFromServer();
        setInterval(this.loadMoviesFromServer, this.props.pollInterval);
    }
    render() {
        return (
            <div>
                <Movie
                    title={ this.state.data.title }
                    tagline={ this.state.data.tagline }>
                </Movie>
            </div>
        )
    }
}
export default MovieContainer;