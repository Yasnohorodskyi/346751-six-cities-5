import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import Header from "../header/header";
import Main from "../main/main";
import ReviewsList from "../reviews-list/reviews-list";
import OffersMap from "../offers-map/offers-map";
import OffersList from "../offers-list/offers-list";
import {getOffersByCity} from "../../store/selectors";

import withActiveCard from "../../hocs/with-active-card/with-active-card";

const OffersListWithActiveCard = withActiveCard(OffersList);

const PropertyScreen = ({offers, reviews}) => {
  const offer = offers[0];
  const {
    title,
    type,
    rating,
    price,
    [`is_favorite`]: isFavorite,
    images,
    [`is_premium`]: isPremium,
    bedrooms,
    [`max_adults`]: maxAdults,
    goods,
    host,
    description
  } = offer;

  return (
    <div className="page">
      <Header/>
      <Main renderClassName={() => (`page__main--property`)}>
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                images.slice(-6).map((image, i) => (
                  <div className="property__image-wrapper"
                    key={`${i}-image`}
                  >
                    <img className="property__image" src={image} alt="Photo studio"/>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`property__bookmark-button ` + (isFavorite ? `property__bookmark-button--active ` : ` `) + `button`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: Math.round(rating * 2) * 10 + `%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms === 1 ?
                    `${bedrooms} Bedroom` :
                    `${bedrooms} Bedrooms`
                  }
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    goods.map((insideItem, i) => (
                      <li className="property__inside-item"
                        key={`${i}-insideItem`}
                      >
                        {insideItem}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ` + (host.isPro ? `property__avatar-wrapper--pro ` : ` `) + `user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <ReviewsList
                reviews={reviews}
              />
            </div>
          </div>
          <section className="property__map map">
            <OffersMap
              offers={offers.slice(-3)}
              activeZoomControl={true}
              activeScrollWheelZoom={false}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersListWithActiveCard
              offers={offers.slice(-3)}
              renderClassName={() => (`near-places__list`)}
              renderOfferMark={() => (false)}
            />
          </section>
        </div>
      </Main>
    </div>
  );
};

PropertyScreen.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    [`is_favorite`]: PropTypes.bool.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    [`is_premium`]: PropTypes.bool.isRequired,
    bedrooms: PropTypes.number.isRequired,
    [`max_adults`]: PropTypes.number.isRequired,
    goods: PropTypes.arrayOf(PropTypes.string).isRequired,
    host: PropTypes.shape({
      [`avatar_url`]: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      [`is_pro`]: PropTypes.bool.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
  reviews: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  offers: getOffersByCity(state),
  reviews: state.DATA.reviews,
});

export {PropertyScreen};
export default connect(mapStateToProps)(PropertyScreen);
