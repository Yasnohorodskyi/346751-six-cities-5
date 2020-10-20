import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainPage from "../main-page/main-page";
import AuthScreen from "../auth-screen/auth-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import PropertyScreen from "../property-screen/property-screen";


const App = (props) => {
  const {offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage
            offers={offers}
          />
        </Route>
        <Route exact path="/login">
          <AuthScreen/>
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen
            offers={offers}
          />
        </Route>
        <Route exact path="/offer/:id">
          <PropertyScreen
            offer={offers[0]}
            firstNeighbourhood={offers[1]}
            secondNeighbourhood={offers[2]}
            thirdNeighbourhood={offers[3]}
            reviews={reviews}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
};

export default App;
