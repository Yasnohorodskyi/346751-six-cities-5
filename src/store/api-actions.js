import {ActionCreator} from "./action";
import {AuthorizationStatus} from "../const";

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then((response) => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH, response.data.email)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH, email)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
);

export const fetchOfferById = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadCurrentOffer(data)))
    .catch(() => dispatch(ActionCreator.redirectToRoute(`/`)))
);

export const fetchCurrentOfferReviews = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadCurrentOfferReviews(data)))
);

export const fetchCurrentOfferNearby = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => dispatch(ActionCreator.loadCurrentOfferNearby(data)))
);


export const postNewReview = (id, {review: comment, rating}) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, {comment, rating})
    .then(({data}) => dispatch(ActionCreator.loadCurrentOfferReviews(data)))
);


export const changeFavoriteStatus = (id, favoriteStatus) => (dispatch, _getState, api) => (
  api.post(`/favorite/${id}/${favoriteStatus}`)
    .then(({data}) => {
      dispatch(ActionCreator.updateFavoriteStatus(data));
    })
);
