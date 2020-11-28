import React from "react";
import renderer from "react-test-renderer";
import {PrivateRoute} from "./private-route";
import {BrowserRouter} from "react-router-dom";
import {AuthorizationStatus} from "../../const";

describe(`PrivateRoute render`, () => {
  it(`should render with NO_AUTH`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <PrivateRoute
              exact={true}
              path={`path`}
              render={() => {}}
              authorizationStatus={AuthorizationStatus.NO_AUTH}
            />
          </BrowserRouter>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render with AUTH`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <PrivateRoute
              exact={true}
              path={`path`}
              render={() => {}}
              authorizationStatus={AuthorizationStatus.AUTH}
            />
          </BrowserRouter>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
