export const ActionType = {
  CITY_CHANGE: `CITY_CHANGE`,
  GET_OFFERS_LIST: `GET_OFFERS_LIST`,
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
};
