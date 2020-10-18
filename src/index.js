import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import offers from "./mocs/offers";
import reviews from "./mocs/reviews";


const Settings = {
  PLACES_COUNT: 311
};

ReactDOM.render(
    <App
      placesCount={Settings.PLACES_COUNT}
      offers={offers}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);
