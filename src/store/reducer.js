import {extend} from "../utils.js";
import {ActionType} from "./action";
import offers from "../mocs/offers";
import reviews from "../mocs/reviews";
import {Cities, SortOptions} from "../const";

const initialState = {
  city: Cities[0],
  offers: offers[Cities[0]],
  reviews,
  sortOption: SortOptions[`popular`],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CITY_CHANGE:
      return extend(state, {
        city: action.payload,
      });

    case ActionType.GET_OFFERS_LIST:
      return extend(state, {
        offers: offers[action.payload],
      });
    case ActionType.SORTING_OPTION_CHANGE:
      return extend(state, {
        offers: action.payload,
      });
  }

  return state;
};

export {reducer};
