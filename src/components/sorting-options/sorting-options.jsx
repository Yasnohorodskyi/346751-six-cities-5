import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {SortOptions} from "../../const";

const SortingOptions = (props) => {
  const {
    sortOption,
    onSortingOptionChange,
    isOpen,
    onOpenButtonClick,
  } = props;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0"
        onClick={onOpenButtonClick}
      >
        {sortOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? `places__options--opened` : ``} `}>
        {
          Object.keys(SortOptions).map((option, i) => (
            <li
              key={`${i}-option`}
              className={`places__option ${sortOption === SortOptions[option] ? `places__option--active` : ``}`}
              tabIndex="0"
              onClick={() => {
                onSortingOptionChange(SortOptions[option]);
              }}
            >
              {SortOptions[option]}
            </li>
          ))
        }
      </ul>
    </form>
  );
};

SortingOptions.propTypes = {
  sortOption: PropTypes.string.isRequired,
  onSortingOptionChange: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onOpenButtonClick: PropTypes.func.isRequired,

};

const mapStateToProps = (state) => ({
  sortOption: state.sortOption,
});

const mapDispatchToProps = (dispatch) => ({
  onSortingOptionChange(item) {
    dispatch(ActionCreator.sortingOptionChange(item));
  }
});

export {SortingOptions};
export default connect(mapStateToProps, mapDispatchToProps)(SortingOptions);
