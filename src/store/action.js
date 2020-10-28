import {sortOffers} from "../offersSort";

export const ActionType = {
  CITY_CHANGE: `CITY_CHANGE`,
  GET_OFFERS_LIST: `GET_OFFERS_LIST`,
  SORTING_OPTION_CHANGE: `SORTING_OPTION_CHANGE`,
};

export const ActionCreator = {
  cityChange: (item) => ({
    type: ActionType.CITY_CHANGE,
    payload: item,
  }),
  getOffersList: (item) => ({
    type: ActionType.GET_OFFERS_LIST,
    payload: item,
  }),
  sortingOptionChange: (item, offers) => {
    let sortedOffers = null;

    sortedOffers = sortOffers(item, offers);

    return {
      type: ActionType.SORTING_OPTION_CHANGE,
      payload: sortedOffers,
    };
  },
};
