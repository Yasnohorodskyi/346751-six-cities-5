import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import Header from "../header/header";
import Main from "../main/main";
import FavoriteCard from "../favorite-card/favorite-card";
import Footer from "../footer/footer";

const FavoritesScreen = ({offers, onCardMouseOver}) => {

  return (
    <div className="page">
      <Header/>
      <Main renderClassName={() => (`page__main--favorites`)}>
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {

              }
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {
                    offers[`Amsterdam`].map((offer) => {
                      if (offer.bookmark) {
                        return (
                          <FavoriteCard
                            key={`${offer[`id`]}-${offer[`city`]}`}
                            offer={offer}
                            onHover={() => (onCardMouseOver(offer.id))}
                          />
                        );
                      }

                      return false;
                    })
                  }
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {
                    offers[`Cologne`].map((offer) => {
                      if (offer.bookmark) {
                        return (
                          <FavoriteCard
                            key={`${offer[`id`]}-${offer[`city`]}`}
                            offer={offer}
                            onHover={() => (onCardMouseOver(offer.id))}
                          />
                        );
                      }

                      return false;
                    })
                  }
                </div>
              </li>
            </ul>
          </section>
        </div>
      </Main>
      <Footer/>
    </div>
  );
};

FavoritesScreen.propTypes = {
  offers: PropTypes.objectOf(PropTypes.array).isRequired,
  onCardMouseOver: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
});

export {FavoritesScreen};
export default connect(mapStateToProps)(FavoritesScreen);
