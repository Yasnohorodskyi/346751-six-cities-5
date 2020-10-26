import {extend} from "../utils.js";
import offers from "../mocs/offers";
import reviews from "../mocs/offers";
import {Cities} from "../const";

const initialState = {
  city: Cities[0],
  offers: offers[Cities[0]],
  reviews: reviews[0],
};

const reducer = (state = initialState, action) => {

  return state;
};

export {reducer};
