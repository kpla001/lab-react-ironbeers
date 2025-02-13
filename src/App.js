import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import beers from './assets/beers.png';
import newBeer from './assets/new-beer.png';
import randomBeer from './assets/random-beer.png';
import Home from './components/home/Home';
import Header from './components/header/Header';
import BeersList from './components/beerslist/BeersList';
import BeerDetails from './components/beerdetails/BeerDetails';
import RandomBeer from './components/randombeer/RandomBeer';
import NewBeer from './components/newbeer/NewBeer';

function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route
          exact path = "/"
          exact render = {(props) => <Home {...props} /> }
        />
      
        <Route
          exact path="/beers"
          exact render = {(props) =>  <BeersList {...props} /> }
        />

        <Route
          exact path="/beers/:beerId"
          exact render = {(props) => <BeerDetails {...props} /> }
        />

        <Route
          exact path="/beers/random"
          exact render = {(props) => <RandomBeer {...props} /> }
        />
        
        <Route 
          exact path="/newbeer"
          exact render = {(props) => <NewBeer {...props} /> }
        />

      </Switch>
    </div>
  );
}

export default App;
