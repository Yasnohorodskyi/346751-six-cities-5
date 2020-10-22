import React from "react";
import PropTypes from "prop-types";

const Main = (props) => {

  return (
    <main className={`page__main ${props.renderClassName()}`}>
      {props.children}
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.any.isRequired,
  renderClassName: PropTypes.func.isRequired,
};

export default Main;
