import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import Header from "../header/header";
import Main from "../main/main";
import FavoriteCard from "../favorite-card/favorite-card";
import Footer from "../footer/footer";
import {Cities} from "../../const";
import {getOffers} from "../../store/selectors";

const FavoritesScreen = ({offers, onCardMouseOver}) => {
  const cityFavoriteOffers = (city) => {
    return offers.filter((it) => it.city.name === city && it.is_favorite);
  };

  return (
    <div className="page">
      <Header/>
      <Main renderClassName={() => (`page__main--favorites`)}>
        <div className="page__favorites-container container">
          {cityFavoriteOffers().length
            ?
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {
                  Cities.map((city, i) => (
                    <li key={`${i}-${city}`} className="favorites__locations-items">
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <a className="locations__item-link" href="#">
                            <span>{city}</span>
                          </a>
                        </div>
                      </div>
                      <div className="favorites__places">
                        {
                          cityFavoriteOffers(city).map((offer) => {
                            return (
                              <FavoriteCard
                                key={`${offer.id}-${city}`}
                                offer={offer}
                                onHover={() => (onCardMouseOver(offer.id))}
                              />
                            );
                          })
                        }
                      </div>
                    </li>
                  ))
                }
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
};

FavoritesScreen.propTypes = {
  offers: PropTypes.array.isRequired,
  onCardMouseOver: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
});

export {FavoritesScreen};
export default connect(mapStateToProps)(FavoritesScreen);
