import React from "react";
import renderer from "react-test-renderer";
import {OfferCard} from "./offer-card";
import {AuthorizationStatus} from "../../const";
import {offers} from "../../../mocks/mocks";
import {BrowserRouter} from "react-router-dom";

const noop = () => {};

describe(`OfferCard render`, () => {
  it(`should render favorite and premium offer, AUTH`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <OfferCard
              key={1}
              offer={offers[1]}
              onHover={noop}
              onUnHover={noop}
              renderClassName={noop}
              renderMark={noop}
              updateFavoriteStatus={noop}
              authorizationStatus={AuthorizationStatus.AUTH}
            />
          </BrowserRouter>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render no favorite and no premium offer, NO_AUTH`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <OfferCard
              key={1}
              offer={offers[0]}
              onHover={noop}
              onUnHover={noop}
              renderClassName={noop}
              renderMark={noop}
              updateFavoriteStatus={noop}
              authorizationStatus={AuthorizationStatus.NO_AUTH}
            />
          </BrowserRouter>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
