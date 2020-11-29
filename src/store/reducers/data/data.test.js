import {ActionType} from "../../action";
import {data} from "./data";
import {offers, reviews} from "../../../../mocks/mocks";

describe(`Data reducer test`, () => {
  it(`should return initial state`, () => {
    expect(data(void 0, {})).toEqual({
      offers: [],
      currentOffer: [],
      currentOfferReviews: [],
      currentOfferNearby: [],
      favoriteOffers: [],
    });
  });

  it(`should load offers by load offers`, () => {
    expect(data({
      offers: [],
    }, {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    })).toEqual({
      offers
    });
  });

  it(`should load current offer by load current offer`, () => {
    expect(data({
      currentOffer: [],
    }, {
      type: ActionType.LOAD_CURRENT_OFFER,
      payload: offers[0],
    })).toEqual({
      currentOffer: offers[0]
    });
  });

  it(`should load reviews by load current offer reviews`, () => {
    expect(data({
      currentOfferReviews: [],
    }, {
      type: ActionType.LOAD_CURRENT_OFFER_REVIEWS,
      payload: reviews,
    })).toEqual({
      currentOfferReviews: reviews
    });
  });

  it(`should load nearby by load current offer nearby`, () => {
    expect(data({
      currentOfferNearby: [],
    }, {
      type: ActionType.LOAD_CURRENT_OFFER_NEARBY,
      payload: offers,
    })).toEqual({
      currentOfferNearby: offers
    });
  });

  it(`should load favorite offers by load favorite offers`, () => {
    expect(data({
      favoriteOffers: [],
    }, {
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: offers,
    })).toEqual({
      favoriteOffers: offers
    });
  });

  it(`should update favorite status by update favorite status`, () => {
    expect(data({
      offers: [{id: 1, isFavorite: false}, {id: 2, isFavorite: false}],
      currentOffer: {id: 1, isFavorite: false},
      currentOfferNearby: [{id: 1, isFavorite: false}, {id: 2, isFavorite: false}],
      favoriteOffers: [{id: 1, isFavorite: true}],
    }, {
      type: ActionType.UPDATE_FAVORITE_STATUS,
      payload: {id: 1, isFavorite: true},
    })).toEqual({
      offers: [{id: 1, isFavorite: true}, {id: 2, isFavorite: false}],
      currentOffer: {id: 1, isFavorite: true},
      currentOfferNearby: [{id: 1, isFavorite: true}, {id: 2, isFavorite: false}],
      favoriteOffers: [],
    });
  });
});
