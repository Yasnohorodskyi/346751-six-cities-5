import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {FavoritesScreen} from "./favorites-screen";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "../../store/reducers/root-reducer";
import {offers} from "../../../mocks/mocks";

configure({adapter: new Adapter()});

const store = createStore(reducer);

it(`FavoriteScreen should call onCardMouseOver 1 time`, () => {
  const onCardMouseOver = jest.fn();

  const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <FavoritesScreen
            favoriteOffers={offers}
            onCardMouseOver={onCardMouseOver}
            loadFavoriteOffers={() => {}}
          />
        </BrowserRouter>
      </Provider>
  );

  wrapper.find(`.favorites__card`).at(1).simulate(`mouseover`);

  expect(onCardMouseOver).toHaveBeenCalledTimes(1);
});
