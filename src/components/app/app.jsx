import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainPage from "../main-page/main-page";
import AuthScreen from "../auth-screen/auth-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import PropertyScreen from "../property-screen/property-screen";


const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage/>
        </Route>
        <Route exact path="/login">
          <AuthScreen/>
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen/>
        </Route>
        <Route exact path="/offer/:id">
          <PropertyScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
