import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";


const Settings = {
  PLACES_COUNT: 311
};

ReactDOM.render(
    <App
      placesCount={Settings.PLACES_COUNT}
    />,
    document.querySelector(`#root`)
);
