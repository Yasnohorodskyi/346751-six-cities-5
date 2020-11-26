export const ActionType = {
  CITY_CHANGE: `CITY_CHANGE`,
  SORTING_OPTION_CHANGE: `SORTING_OPTION_CHANGE`,
  ACTIVE_CARD_CHANGE: `ACTIVE_CARD_CHANGE`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  LOAD_CURRENT_OFFER: `LOAD_CURRENT_OFFER`,
  LOAD_CURRENT_OFFER_REVIEWS: `LOAD_CURRENT_OFFER_REVIEWS`,
  LOAD_CURRENT_OFFER_NEARBY: `LOAD_CURRENT_OFFER_NEARBY`,
  LOAD_FAVORITE_OFFERS: `LOAD_FAVORITE_OFFERS`,
  UPDATE_FAVORITE_STATUS: `UPDATE_FAVORITE_STATUS`
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
  requireAuthorization: (status, email = ``) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: {status, email},
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  loadCurrentOffer: (data) => ({
    type: ActionType.LOAD_CURRENT_OFFER,
    payload: data,
  }),
  loadCurrentOfferReviews: (data) => ({
    type: ActionType.LOAD_CURRENT_OFFER_REVIEWS,
    payload: data,
  }),
  loadCurrentOfferNearby: (data) => ({
    type: ActionType.LOAD_CURRENT_OFFER_NEARBY,
    payload: data,
  }),
  loadFavoriteOffers: (data) => ({
    type: ActionType.LOAD_FAVORITE_OFFERS,
    payload: data,
  }),
  updateFavoriteStatus: (data) => ({
    type: ActionType.UPDATE_FAVORITE_STATUS,
    payload: data,
  }),
};
