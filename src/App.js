import React from "react";
import "./css/reset.css";
import "./css/mainpage.css";
import "./css/review.css";
import "./css/seats.css";
import "./css/sessions.css";
import "./css/bottombar.css";
import "./css/navbar.css";
import "./css/style.css";
import "./css/loading.css";

import {
    BrowserRouter,
    Route,
    Switch
} from "react-router-dom";
import NavBar from "./Components/NavBar";
import MainPage from "./Components/MainPage";
import MovieSessions from "./Components/MovieSessions";
import SessionSeats from "./Components/SessionSeats";
import RequestReview from "./Components/RequestReview";

export default function App () {

    return (
        <>
            <BrowserRouter>
                <NavBar />

                <Switch>
                    <Route exact path="/">
                        <MainPage />
                    </Route>
                    
                    <Route exact path="/sessions/:movieId">
                        <MovieSessions />
                    </Route>

                    <Route exact path="/seats/:sessionId">
                        <SessionSeats />
                    </Route>

                    <Route exact path="/sucess">
                        <RequestReview />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}