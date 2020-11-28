import React from "react";
import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {AuthScreen} from "./auth-screen";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "../../store/reducers/root-reducer";

const noop = () => {};
const store = createStore(reducer);

describe(`AuthScreen render correctly`, () => {
  it(`With Paris city and AUTH`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <AuthScreen
                city={`Paris`}
                authorizationStatus={`AUTH`}
                onSubmit={noop}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With Amstardam city and NO_AUTH`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <AuthScreen
                city={`Amstardam`}
                authorizationStatus={`NO_AUTH`}
                onSubmit={noop}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
