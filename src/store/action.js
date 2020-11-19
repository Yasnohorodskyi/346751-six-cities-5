export const ActionType = {
  CITY_CHANGE: `CITY_CHANGE`,
  SORTING_OPTION_CHANGE: `SORTING_OPTION_CHANGE`,
  ACTIVE_CARD_CHANGE: `ACTIVE_CARD_CHANGE`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
};

export const ActionCreator = {
  cityChange: (item) => ({
    type: ActionType.CITY_CHANGE,
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
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
};
