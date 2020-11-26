import {extend, getIndex, getNewArray} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  offers: [],
  currentOffer: [],
  currentOfferReviews: [],
  currentOfferNearby: [],
  favoriteOffers: [],
};

export const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
      });
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
    case ActionType.LOAD_CURRENT_OFFER:
      return extend(state, {
        currentOffer: action.payload,
      });
    case ActionType.LOAD_CURRENT_OFFER_REVIEWS:
      return extend(state, {
        currentOfferReviews: action.payload,
      });
    case ActionType.LOAD_CURRENT_OFFER_NEARBY:
      return extend(state, {
        currentOfferNearby: action.payload,
      });
    case ActionType.UPDATE_FAVORITE_STATUS:
      const resultObject = {};

      let indexOfUpdateOffer = getIndex(action.payload, state.offers);

      if (indexOfUpdateOffer !== -1) {
        resultObject.offers = getNewArray(action.payload, state.offers, indexOfUpdateOffer);
      }

      indexOfUpdateOffer = getIndex(action.payload, state.currentOfferNearby);
      if (indexOfUpdateOffer !== -1) {
        resultObject.currentOfferNearby = getNewArray(action.payload, state.currentOfferNearby, indexOfUpdateOffer);
      }

      if (state.currentOffer.id === action.payload.id) {
        resultObject.currentOffer = action.payload;
      }

      resultObject.favoriteOffers = state.favoriteOffers.slice(0).filter((offer) => offer.id !== action.payload.id);

      return extend(state, resultObject);
  }

  return state;
};
