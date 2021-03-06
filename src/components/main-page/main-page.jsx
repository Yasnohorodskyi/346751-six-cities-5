import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {getCity, getOffersByCity} from "../../store/selectors";

import {SortOptions} from "../../const";

import Header from "../header/header";
import Main from "../main/main";
import CitiesList from "../cities-list/cities-list";
import OffersList from "../offers-list/offers-list";
import OffersMap from "../offers-map/offers-map";
import SortingOptions from "../sorting-options/sorting-options";
import EmptyResult from "../empty-result/empty-result";

import withOpenState from "../../hocs/with-open-state/with-open-state";
import withActiveCard from "../../hocs/with-active-card/with-active-card";

const SortingOptionsWithOpenState = withOpenState(SortingOptions);
const OffersListWithActiveCard = withActiveCard(OffersList);

const MainPage = ({offers, city, onCityChange, sortOption}) => {

  const sortingOffers = () => {
    let sortedOffers = offers.slice(0);

    switch (sortOption) {
      case SortOptions.POPULAR:
        return offers;

      case SortOptions.LOW_TO_HIGH:
        sortedOffers.sort((a, b) => (a.price > b.price ? 1 : -1));
        return sortedOffers;

      case SortOptions.HIGH_TO_LOW:
        sortedOffers.sort((a, b) => (a.price > b.price ? -1 : 1));
        return sortedOffers;

      case SortOptions.RATING:
        sortedOffers.sort((a, b) => (a.rating > b.rating ? -1 : 1));
        return sortedOffers;
    }

    return offers;
  };

  return (
    <div className="page page--gray page--main">
      <Header/>
      <Main
        renderClassName={() => {
          cn(`page__main--index`, {'page__main--index page__main--index-empty': !offers.length});
        }}
      >
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList
          city={city}
          onCityChange={onCityChange}
        />
        <div className="cities">
          {offers.length
            ?
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{(offers.length)} places to stay in {city}</b>
                <SortingOptionsWithOpenState />
                <OffersListWithActiveCard
                  offers={sortingOffers()}
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
            :
            <EmptyResult
              city={city}
            />
          }
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
};

const mapStateToProps = (state) => ({
  city: getCity(state),
  offers: getOffersByCity(state),
  sortOption: state.PROCESS.sortOption,
});

const mapDispatchToProps = (dispatch) => ({
  onCityChange(item) {
    dispatch(ActionCreator.cityChange(item));
  }
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
