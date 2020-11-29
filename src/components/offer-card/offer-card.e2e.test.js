import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {OfferCard} from "./offer-card";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "../../store/reducers/root-reducer";
import {offers} from "../../../mocks/mocks";
import {AuthorizationStatus} from "../../const";

configure({adapter: new Adapter()});

const store = createStore(reducer);

const noop = () => {};

describe(`OfferCard e2e test`, () => {
  it(`should call hover 1 time`, () => {
    const onHover = jest.fn();

    const wrapper = mount(
        <Provider store={store}>
          <BrowserRouter>
            <OfferCard
              onHover={onHover}
              onUnHover={noop}
              updateFavoriteStatus={noop}
              offer={offers[0]}
              authorizationStatus={AuthorizationStatus.AUTH}
              renderClassName={noop}
              renderMark={noop}
            />
          </BrowserRouter>
        </Provider>
    );

    wrapper.find(`.place-card`).simulate(`mouseenter`);

    expect(onHover).toHaveBeenCalledTimes(1);
  });

  it(`should call onUnHover 1 time`, () => {
    const onUnHover = jest.fn();

    const wrapper = mount(
        <Provider store={store}>
          <BrowserRouter>
            <OfferCard
              onHover={noop}
              onUnHover={onUnHover}
              updateFavoriteStatus={noop}
              offer={offers[0]}
              authorizationStatus={AuthorizationStatus.AUTH}
              renderClassName={noop}
              renderMark={noop}
            />
          </BrowserRouter>
        </Provider>
    );

    wrapper.find(`.place-card`).simulate(`mouseleave`);

    expect(onUnHover).toHaveBeenCalledTimes(1);
  });

  it(`should call updateFavoriteStatus 1 time`, () => {
    const updateFavoriteStatus = jest.fn();

    const wrapper = mount(
        <Provider store={store}>
          <BrowserRouter>
            <OfferCard
              onHover={noop}
              onUnHover={noop}
              updateFavoriteStatus={updateFavoriteStatus}
              offer={offers[0]}
              authorizationStatus={AuthorizationStatus.AUTH}
              renderClassName={noop}
              renderMark={noop}
            />
          </BrowserRouter>
        </Provider>
    );

    wrapper.find(`.place-card__bookmark-button`).simulate(`click`);

    expect(updateFavoriteStatus).toHaveBeenCalledTimes(1);
  });
});
