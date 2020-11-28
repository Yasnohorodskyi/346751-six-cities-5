import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {Header} from "./header";

describe(`Header render`, () => {
  it(`should render with NO_AUTH status, empty email`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Header
              authorizationStatus={`NO_AUTH`}
              email={``}
            />
          </BrowserRouter>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render with AUTH status, email test@test.ru`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Header
              authorizationStatus={`AUTH`}
              email={`test@test.ru`}
            />
          </BrowserRouter>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
