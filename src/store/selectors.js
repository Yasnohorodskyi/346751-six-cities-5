import {createSelector} from "reselect";

export const getOffers = (state) => {
  return state.DATA.offers;
};

export const getCity = (state) => {
  return state.PROCESS.city;
};

export const getOffersByCity = createSelector(
    getOffers,
    getCity,
    (offers, city) => {
      return offers.filter((it) => it.city.name === city);
    }
);

export const getReviews = (state) => {
  return state.DATA.currentOfferReviews;
};

export const sortingReviewsByData = createSelector(
    getReviews,
    (reviews) => {
      return reviews.sort((a, b) => (a.date > b.date ? -1 : 1));
    }
);
