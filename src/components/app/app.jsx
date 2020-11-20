import React from "react";
import {Switch, Route, Router} from "react-router-dom";
import MainPage from "../main-page/main-page";
import AuthScreen from "../auth-screen/auth-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import PropertyScreen from "../property-screen/property-screen";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";

import withActiveCard from "../../hocs/with-active-card/with-active-card";

const FavoritesScreenWithActiveCard = withActiveCard(FavoritesScreen);

const App = () => {

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/">
          <MainPage/>
        </Route>
        <Route exact path="/login">
          <AuthScreen/>
        </Route>
        <PrivateRoute
          exact
          path={`/favorites`}
          render={() => {
            return <FavoritesScreenWithActiveCard/>;
          }}
        />
        <Route exact path="/offer/:id">
          <PropertyScreen/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
