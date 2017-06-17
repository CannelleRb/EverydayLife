import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieContainer from "./MovieContainer";
import MovieDetails from "./MovieDetails";

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/" render={() => (
                    <MovieContainer
                        url='https://api.themoviedb.org/3/discover/movie?api_key=f5edf8745b3ada6d299c0f7b21108020&language=fr&sort_by=popularity.desc'
                        pollInterval={10000} />
                )}/>
                <Route path="/:number"  component={ MovieDetails }/>
            </Switch>
        </main>
    )
}
export default Main