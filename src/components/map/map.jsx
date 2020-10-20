import React from "react";
import PropTypes from "prop-types";

const Map = (props) => {
  const {text} = props;

  return (
    <section className="cities__map map">
      {text}
    </section>
  );
};

Map.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Map;
