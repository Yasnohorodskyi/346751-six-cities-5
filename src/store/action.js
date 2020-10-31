export const ActionType = {
  CITY_CHANGE: `CITY_CHANGE`,
  GET_OFFERS_LIST: `GET_OFFERS_LIST`,
  SORTING_OPTION_CHANGE: `SORTING_OPTION_CHANGE`,
  ACTIVE_CARD_CHANGE: `ACTIVE_CARD_CHANGE`,
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
  sortingOptionChange: (item) => ({
    type: ActionType.SORTING_OPTION_CHANGE,
    payload: item,
  }),
  activeCardChange: (cardId) => ({
    type: ActionType.ACTIVE_CARD_CHANGE,
    payload: cardId,
  }),
};
