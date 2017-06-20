import React, { Component } from 'react';
import axios from 'axios';
import MovieList from './MovieList';
import '../../styles/MovieContainer.css';
import { Link } from "react-router-dom";

class MovieContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: 'https://api.themoviedb.org/3/discover/movie?api_key=f5edf8745b3ada6d299c0f7b21108020&language=fr&sort_by=popularity.desc&page=',
            pollInterval: 1000,
            data: [],
            page: (this.props.match) ? parseInt(this.props.match.params.number, 10) : 1,
            nbPages: 0
        };
        this.loadMoviesFromServer = this.loadMoviesFromServer.bind(this);
    }
    loadMoviesFromServer() {
        console.log(this.state.page);
        let currentPageUrl = this.state.url + this.state.page;
        axios.get(currentPageUrl)
            .then(res => {
                this.setState({ data: res.data.results, nbPages: res.data.total_pages });
            })
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ page: (nextProps.match) ? parseInt(nextProps.match.params.number, 10) : 1 });
    }
    componentDidMount() {
        console.log(this.props.match.params)
        this.loadMoviesFromServer();
        setInterval(this.loadMoviesFromServer, this.state.pollInterval);
    }
    render() {
        let previous;
        let next;
        let page = this.state.page;

        if (page > 1) {
            previous = page - 1
        }
        else {previous = page}
        if (page < this.state.nbPages) {
            next = page + 1
        }
        else {next = page}

        previous = "/page/" + previous;
        next = "/page/" + next;

        return (
            <div>
                <MovieList
                    data={ this.state.data }/>
                <div className="pagination_wrapper">
                    <div className="pagination">
                        <Link to={previous}>❮</Link>
                        <Link to={next}>❯</Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default MovieContainer;