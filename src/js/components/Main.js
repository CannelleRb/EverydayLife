import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MovieContainer from "./MovieContainer";
import MovieDetailsContainer from "./MovieDetailsContainer";
import '../../styles/Main.css'

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/" render={() => (
                    <Redirect to="/page/1" />
                )}/>
                <Route path="/page/:number" component={ MovieContainer }/>
                <Route path="/:number"  component={ MovieDetailsContainer }/>
            </Switch>
        </main>
    )
}
export default Main