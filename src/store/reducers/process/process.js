import {extend} from "../../../utils";
import {ActionType} from "../../action";
import {Cities, SortOptions} from "../../../const";

const initialState = {
  city: Cities[0],
  sortOption: SortOptions.popular,
  activeCard: -1,
};

export const process = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CITY_CHANGE:
      return extend(state, {
        city: action.payload,
      });
    case ActionType.SORTING_OPTION_CHANGE:
      return extend(state, {
        sortOption: action.payload,
      });
    case ActionType.ACTIVE_CARD_CHANGE:
      return extend(state, {
        activeCard: action.payload,
      });
  }

  return state;
};
