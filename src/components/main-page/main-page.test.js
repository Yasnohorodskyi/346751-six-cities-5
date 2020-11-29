import React from "react";
import renderer from "react-test-renderer";
import {MainPage} from "./main-page";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "../../store/reducers/root-reducer";
import {offers} from "../../../mocks/mocks";
import {SortOptions} from "../../const";

const noop = () => {};
const store = createStore(reducer);
jest.mock(`../offers-map/offers-map`, () => `Map`);

describe(`MainPage render`, () => {
  it(`should render without offers`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <MainPage
                city={`Paris`}
                onCityChange={noop}
                offers={[]}
                sortOption={SortOptions.POPULAR}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render with offers`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <MainPage
                city={`Paris`}
                onCityChange={noop}
                offers={offers}
                sortOption={SortOptions.LOW_TO_HIGH}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
