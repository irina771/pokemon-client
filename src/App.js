import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  CreatePokemon,
  DetailPage,
  HomePage,
  LandingPage,
  NotFound,
} from "./views/index";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <LandingPage />
      </Route>
      
      <Route exact path="/home">
        <HomePage />
      </Route>

      <Route exact path="/pokemon:id">
        <DetailPage />
      </Route>

      <Route exact path="/createPokemons">
        <CreatePokemon />
      </Route>

      <Route exact path="*">
        <NotFound />
      </Route>
    </Router>
  );
}

export default App;
