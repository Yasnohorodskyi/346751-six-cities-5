import React from "react";
import PropTypes from "prop-types";
import {Cities} from "../../const";

const CitiesList = ({city, onCityChange}) => {

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            Cities.map((item) => (
              <li
                key={item}
                className="locations__item"
                onClick={() => {
                  onCityChange(item);
                }}
              >
                <a className={`locations__item-link tabs__item ${city === item ? `tabs__item--active` : ``}`}>
                  <span>{item}</span>
                </a>
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  );
};

CitiesList.propTypes = {
  city: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired,
};

export default CitiesList;
