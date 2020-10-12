import React from "react";
import MainPage from "../main-page/main-page";


const App = (props) => {
  const {placesCount} = props;

  return (
    <MainPage placesCount={placesCount} />
  )
};

export default App;
