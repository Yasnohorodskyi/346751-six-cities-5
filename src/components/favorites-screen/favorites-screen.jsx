import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import Header from "../header/header";
import Main from "../main/main";
import FavoriteCard from "../favorite-card/favorite-card";
import Footer from "../footer/footer";

import {fetchFavoriteOffers} from "../../store/api-actions";

class FavoritesScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {loadFavoriteOffers} = this.props;
    loadFavoriteOffers();
  }

  render() {
    const {favoriteOffers, onCardMouseOver} = this.props;

    const favoriteOffersCities = Array.from(new Set(favoriteOffers.map((offer) => offer.city.name)));

    const favoriteOffersForCity = favoriteOffersCities.map((cityName, i) => {
      return (
        <li key={`${i}-favoriteOffersForCity`} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{cityName}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {

              favoriteOffers.filter((offer) => offer.city.name === cityName).map((offer) => {
                return (
                  <FavoriteCard
                    key={`${offer.id}-${cityName}`}
                    offer={offer}
                    onHover={() => (onCardMouseOver(offer.id))}
                  />
                );
              })
            }
          </div>
        </li>
      );
    });

    return (
      <div className="page">
        <Header/>
        <Main renderClassName={() => (`page__main--favorites`)}>
          <div className="page__favorites-container container">
            {favoriteOffers.length
              ?
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {favoriteOffersForCity}
                </ul>
              </section>
              :
              <section className="favorites favorites--empty">
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
                </div>
              </section>
            }
          </div>
        </Main>
        <Footer/>
      </div>
    );
  }
}

FavoritesScreen.propTypes = {
  favoriteOffers: PropTypes.array.isRequired,
  onCardMouseOver: PropTypes.func.isRequired,
  loadFavoriteOffers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  favoriteOffers: state.DATA.favoriteOffers,
});

const mapDispatchToProps = (dispatch) => ({
  loadFavoriteOffers() {
    dispatch(fetchFavoriteOffers());
  }
});

export {FavoritesScreen};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);
