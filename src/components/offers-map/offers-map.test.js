import React from "react";
import renderer from "react-test-renderer";
import {OffersMap} from "./offers-map";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "../../store/reducers/root-reducer";
import {offers} from "../../../mocks/mocks";

const store = createStore(reducer);

describe(`OffersMap render`, () => {
  it(`should render without current offer`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <OffersMap
                offers={offers}
                currentOffer={null}
                activeZoomControl={true}
                activeScrollWheelZoom={false}
                activeCard={1}
              />
            </BrowserRouter>
          </Provider>,
          {
            createNodeMock: () => {
              return document.createElement(`div`);
            }
          }
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render with current offer`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <OffersMap
                offers={offers}
                currentOffer={offers[0]}
                activeZoomControl={false}
                activeScrollWheelZoom={true}
                activeCard={1}
              />
            </BrowserRouter>
          </Provider>,
          {
            createNodeMock: () => {
              return document.createElement(`div`);
            }
          }
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
