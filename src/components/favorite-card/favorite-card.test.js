import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {FavoriteCard} from "./favorite-card";
import {offers} from "../../../mocks/mocks";

const noop = () => {};

describe(`FavoriteCard render correctly`, () => {
  it(`With first offer, AUTH, Paris`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <FavoriteCard
              key={`${offers[0].id}-${`Paris`}`}
              offer={offers[0]}
              onHover={noop}
              authorizationStatus={`AUTH`}
              updateFavoriteStatus={noop}
            />
          </BrowserRouter>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With second offer, NO_AUTH, Amsterdam`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <FavoriteCard
              key={`${offers[1].id}-${`Amstrerdam`}`}
              offer={offers[1]}
              onHover={noop}
              authorizationStatus={`NO_AUTH`}
              updateFavoriteStatus={noop}
            />
          </BrowserRouter>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
