import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header";
import ReviewsList from "../reviews-list/reviews-list";
import OffersMap from "../offers-map/offers-map";
import NearOffersList from "../near-offers-list/near-offers-list";

const PropertyScreen = (props) => {
  const {offers, reviews} = props;
  const offer = offers[0];
  const nearOffers = offers.slice(1);
  const {
    name,
    type,
    rating,
    price,
    priceText,
    bookmark,
    images,
    mark,
    bedrooms,
    adults,
    inside,
    host,
    description
  } = offer;

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                images.map((image, i) => (
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
              {mark &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {name}
                </h1>
                <button className={`property__bookmark-button ` + (bookmark ? `property__bookmark-button--active ` : ` `) + `button`} type="button">
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
                  Max {adults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;{priceText}</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    inside.map((insideItem, i) => (
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
                  <div className={`property__avatar-wrapper ` + (host[`status`] ? `property__avatar-wrapper--pro ` : ` `) + `user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={host[`avatar`]} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {host[`name`]}
                  </span>
                </div>
                <div className="property__description">
                  {
                    description.map((text, i) => (
                      <p className="property__text"
                        key={`${i}-text`}
                      >
                        {text}
                      </p>
                    ))
                  }
                </div>
              </div>
              <ReviewsList
                reviews={reviews}
              />
            </div>
          </div>
          <section className="property__map map">
            <OffersMap
              offers={nearOffers}
              activeZoomControl={true}
              activeScrollWheelZoom={false}
            />
          </section>
        </section>
        <NearOffersList
          nearOffers={nearOffers}
        />
      </main>
    </div>
  );
};

PropertyScreen.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    priceText: PropTypes.string.isRequired,
    bookmark: PropTypes.bool.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    mark: PropTypes.bool.isRequired,
    bedrooms: PropTypes.number.isRequired,
    adults: PropTypes.number.isRequired,
    inside: PropTypes.arrayOf(PropTypes.string).isRequired,
    host: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired,
  reviews: PropTypes.array.isRequired,
};

export default PropertyScreen;
