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
