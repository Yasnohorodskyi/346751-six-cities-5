import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {SortOptions} from "../../const";

class SortingOptions extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
    };
  }

  render() {
    const {sortOption, offers, onSortingOptionChange} = this.props;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by </span>
        <span className="places__sorting-type" tabIndex="0"
          onClick={() => {
            this.setState((prevState) => ({
              isOpened: !prevState.isOpened
            }));
          }}
        >
          {sortOption}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${this.state.isOpened ? `places__options--opened` : ``} `}>
          {
            Object.keys(SortOptions).map((option, i) => (
              <li
                key={`${i}-option`}
                className={`places__option ${sortOption === SortOptions[option] ? `places__option--active` : ``}`}
                tabIndex="0"
                onClick={() => {
                  onSortingOptionChange(SortOptions[option], offers);
                }}
              >
                {SortOptions[option]}
              </li>
            ))
          }
        </ul>
      </form>
    );
  }
}

SortingOptions.propTypes = {
  sortOption: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
  onSortingOptionChange: PropTypes.func.isRequired,
};

export default SortingOptions;
