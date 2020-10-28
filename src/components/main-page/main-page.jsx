import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

import Header from "../header/header";
import Main from "../main/main";
import CitiesList from "../cities-list/cities-list";
import OffersList from "../offers-list/offers-list";
import OffersMap from "../offers-map/offers-map";
import SortingOptions from "../sorting-options/sorting-options";


const MainPage = ({offers, city, onCityChange, sortOption, onSortingOptionChange}) => {

  return (
    <div className="page page--gray page--main">
      <Header/>
      <Main renderClassName={() => (`page__main--index`)}>
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList
          city={city}
          onCityChange={onCityChange}
        />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{(offers.length)} places to stay in {city}</b>
              <SortingOptions
                sortOption={sortOption}
                offers={offers}
                onSortingOptionChange={onSortingOptionChange}
              />
              <OffersList
                offers={offers}
                renderClassName={() => (`cities__places-list tabs__content`)}
                renderOfferMark={() => (true)}
              />
            </section>
            <div className="cities__right-section">
              <OffersMap
                offers={offers}
                activeZoomControl={false}
                activeScrollWheelZoom={true}
              />
            </div>
          </div>
        </div>
      </Main>
    </div>
  );
};


MainPage.propTypes = {
  city: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired,
  offers: PropTypes.array.isRequired,
  sortOption: PropTypes.string.isRequired,
  onSortingOptionChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
  sortOption: state.sortOption,
});

const mapDispatchToProps = (dispatch) => ({
  onCityChange(item) {
    dispatch(ActionCreator.cityChange(item));
    dispatch(ActionCreator.getOffersList(item));
  },
  onSortingOptionChange(item, offers = offers) {
    dispatch(ActionCreator.sortingOptionChange(item, offers = offers));
  }
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
