import React from "react";
import renderer from "react-test-renderer";
import {PropertyScreen} from "./property-screen";
import {offers, reviews} from "../../../mocks/mocks";
import {AuthorizationStatus} from "../../const";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {createStore} from "redux";
import reducer from "../../store/reducers/root-reducer";

const noop = () => {};
const store = createStore(reducer);
jest.mock(`../offers-map/offers-map`, () => `Map`);

describe(`PropertyScreen render`, () => {
  it(`should without review`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <PropertyScreen
                currentOfferId={1}
                offers={offers}
                currentOffer={offers[0]}
                reviews={[]}
                offersNearby={offers}
                authorizationStatus={AuthorizationStatus.AUTH}
                loadCurrentOffer={noop}
                loadCurrentOfferReviews={noop}
                loadCurrentOfferNearby={noop}
                updateFavoriteStatus={noop}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should with review`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <PropertyScreen
                currentOfferId={1}
                offers={offers}
                currentOffer={offers[0]}
                reviews={reviews}
                offersNearby={offers}
                authorizationStatus={AuthorizationStatus.AUTH}
                loadCurrentOffer={noop}
                loadCurrentOfferReviews={noop}
                loadCurrentOfferNearby={noop}
                updateFavoriteStatus={noop}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should with NO_AUTH`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <PropertyScreen
                currentOfferId={1}
                offers={offers}
                currentOffer={offers[0]}
                reviews={reviews}
                offersNearby={offers}
                authorizationStatus={AuthorizationStatus.NO_AUTH}
                loadCurrentOffer={noop}
                loadCurrentOfferReviews={noop}
                loadCurrentOfferNearby={noop}
                updateFavoriteStatus={noop}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
