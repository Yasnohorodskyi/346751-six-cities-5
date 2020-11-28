import React from "react";
import renderer from "react-test-renderer";
import OffersList from "./offers-list";
import {offers} from "../../../mocks/mocks";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {createStore} from "redux";
import reducer from "../../store/reducers/root-reducer";

const noop = () => {};
const store = createStore(reducer);

describe(`OffersList render`, () => {
  it(`should render correctly`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <OffersList
                offers={offers}
                renderClassName={noop}
                renderOfferMark={noop}
                onCardMouseOver={noop}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
