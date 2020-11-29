import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {PropertyScreen} from "./property-screen";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "../../store/reducers/root-reducer";
import {AuthorizationStatus} from "../../const";
import {offers, reviews} from "../../../mocks/mocks";

configure({adapter: new Adapter()});

const store = createStore(reducer);

it(`PropertyScreen should call updateFavoriteStatus 1 time`, () => {
  const updateFavoriteStatus = jest.fn();
  const noop = () => {};

  const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <PropertyScreen
            currentOffer={offers[0]}
            currentOfferId={1}
            offersNearby={offers}
            reviews={reviews}
            authorizationStatus={AuthorizationStatus.AUTH}
            loadCurrentOffer={noop}
            loadCurrentOfferReviews={noop}
            loadCurrentOfferNearby={noop}
            updateFavoriteStatus={updateFavoriteStatus}
          />
        </BrowserRouter>
      </Provider>
  );

  wrapper.find(`.property__bookmark-button`).simulate(`click`);

  expect(updateFavoriteStatus).toHaveBeenCalledTimes(1);
});
