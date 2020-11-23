import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import Header from "../header/header";
import Main from "../main/main";
import ReviewsList from "../reviews-list/reviews-list";
import OffersMap from "../offers-map/offers-map";
import OffersList from "../offers-list/offers-list";
import {getOffersByCity} from "../../store/selectors";
import {fetchOfferById} from "../../store/api-actions";

import withActiveCard from "../../hocs/with-active-card/with-active-card";

const OffersListWithActiveCard = withActiveCard(OffersList);


class PropertyScreen extends PureComponent {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const {currentOfferId, loadCurrentOffer} = this.props;
    loadCurrentOffer(currentOfferId);
  }

  componentDidUpdate(prevProps) {
    const {currentOfferId, loadCurrentOffer} = this.props;

    if (prevProps.currentOfferId !== currentOfferId) {
      loadCurrentOffer(currentOfferId);
    }
  }

  render() {
    const {currentOffer, offers, reviews} = this.props;
    if (Object.keys(currentOffer).length) {
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
      } = currentOffer;

      return (
        <div className="page">
          <Header/>
          <Main renderClassName={() => (`page__main--property`)}>
            <section className="property">
              <div className="property__gallery-container container">
                <div className="property__gallery">
                  {
                    images.slice(0, 6).map((image, i) => (
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
                      <span style={{width: Math.round(rating) * 20 + `%`}}></span>
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
                      <div className={`property__avatar-wrapper ` + (host[`is_pro`] ? `property__avatar-wrapper--pro ` : ` `) + `user__avatar-wrapper`}>
                        <img className="property__avatar user__avatar" src={host[`avatar_url`]} width="74" height="74" alt="Host avatar"/>
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
    }
    return (
      <div style={{position: `absolute`, top: `50%`, left: `50%`, transform: `translate(-50%, -50%)`}}>
        <p style={{display: `block`, textAlign: `center`, fontSize: `34px`}}>Loading the offer...</p>
      </div>
    );
  }
}

PropertyScreen.propTypes = {
  currentOfferId: PropTypes.number.isRequired,
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
  currentOffer: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.array.isRequired
  ]),
  reviews: PropTypes.array.isRequired,
  loadCurrentOffer: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offers: getOffersByCity(state),
  reviews: state.DATA.reviews,
  currentOffer: state.DATA.currentOffer,
});

const mapDispatchToProps = (dispatch) => ({
  loadCurrentOffer(id) {
    dispatch(fetchOfferById(id));
  },
});

export {PropertyScreen};
export default connect(mapStateToProps, mapDispatchToProps)(PropertyScreen);
