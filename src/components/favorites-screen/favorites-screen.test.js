import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {FavoritesScreen} from "./favorites-screen";
import {offers} from "../../../mocks/mocks";
import {createStore} from "redux";
import reducer from "../../store/reducers/root-reducer";

const store = createStore(reducer);

describe(`FavoriteScreen render`, () => {
  it(`should render without offers`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <FavoritesScreen
                favoriteOffers={[]}
                onCardMouseOver={() => {}}
                loadFavoriteOffers={() => {}}
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
              <FavoritesScreen
                favoriteOffers={offers}
                onCardMouseOver={() => {}}
                loadFavoriteOffers={() => {}}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
