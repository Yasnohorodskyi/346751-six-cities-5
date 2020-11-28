import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {FavoriteCard} from "./favorite-card";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "../../store/reducers/root-reducer";
import {offers} from "../../../mocks/mocks";
import {AuthorizationStatus} from "../../const";

configure({adapter: new Adapter()});

const store = createStore(reducer);

const noop = () => {};

describe(`FavoriteCard e2e test`, () => {
  it(`should call hover 1 time`, () => {
    const onHover = jest.fn();

    const wrapper = mount(
        <Provider store={store}>
          <BrowserRouter>
            <FavoriteCard
              onHover={onHover}
              offer={offers[0]}
              updateFavoriteStatus={noop}
              authorizationStatus={AuthorizationStatus.AUTH}
            />
          </BrowserRouter>
        </Provider>
    );

    wrapper.find(`.favorites__card`).simulate(`mouseover`);

    expect(onHover).toHaveBeenCalledTimes(1);
  });

  it(`should call updateFavoriteStatus 1 time`, () => {
    const updateFavoriteStatus = jest.fn();

    const wrapper = mount(
        <Provider store={store}>
          <BrowserRouter>
            <FavoriteCard
              onHover={noop}
              offer={offers[0]}
              updateFavoriteStatus={updateFavoriteStatus}
              authorizationStatus={AuthorizationStatus.AUTH}
            />
          </BrowserRouter>
        </Provider>
    );

    wrapper.find(`.place-card__bookmark-button`).simulate(`click`);

    expect(updateFavoriteStatus).toHaveBeenCalledTimes(1);
  });
});
