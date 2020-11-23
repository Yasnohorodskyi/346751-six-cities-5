import {extend} from "../../../utils";
import {ActionType} from "../../action";
import reviews from "../../../mocs/reviews";

const initialState = {
  offers: [],
  currentOffer: [],
  reviews,
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
  }

  return state;
};
