import React from 'react';
import ReactDOM from 'react-dom';
import MovieContainer from './js/components/MovieContainer';
ReactDOM.render(
    <MovieContainer
        url='https://api.themoviedb.org/3/discover/movie?api_key=f5edf8745b3ada6d299c0f7b21108020&language=fr&sort_by=popularity.desc'
        pollInterval={10000} />,
    document.getElementById('root')
);