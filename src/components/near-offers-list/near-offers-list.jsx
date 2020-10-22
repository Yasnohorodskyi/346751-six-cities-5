import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

class NearOffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: ``,
    };
  }

  render() {
    const {nearOffers} = this.props;

    return (
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {
              nearOffers.map((nearOffer, i) => (
                <article className="near-places__card place-card"
                  key={`${i}-nearOffer`}
                  onMouseOver={() => {
                    this.setState(() => ({
                      activeCard: nearOffer[`id`],
                    }));
                  }}
                >
                  <div className="near-places__image-wrapper place-card__image-wrapper">
                    <Link to={{pathname: `/offer/${nearOffer[`id`]}`}}>
                      <img className="place-card__image" src={nearOffer[`images`][0]} width="260" height="200" alt="Place image"/>
                    </Link>
                  </div>
                  <div className="place-card__info">
                    <div className="place-card__price-wrapper">
                      <div className="place-card__price">
                        <b className="place-card__price-value">&euro;{nearOffer[`price`]}</b>
                        <span className="place-card__price-text">&#47;&nbsp;{nearOffer[`priceText`]}</span>
                      </div>
                      <button className={`place-card__bookmark-button ` + (nearOffer[`bookmark`] ? `place-card__bookmark-button--active ` : ` `) + `button`} type="button">
                        <svg className="place-card__bookmark-icon" width="18" height="19">
                          <use xlinkHref="#icon-bookmark"></use>
                        </svg>
                        <span className="visually-hidden">In bookmarks</span>
                      </button>
                    </div>
                    <div className="place-card__rating rating">
                      <div className="place-card__stars rating__stars">
                        <span style={{width: Math.round(nearOffer[`rating`] * 2) * 10 + `%`}}></span>
                        <span className="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <h2 className="place-card__name">
                      <Link to={{pathname: `/offer/${nearOffer[`id`]}`}}>
                        {nearOffer[`name`]}
                      </Link>
                    </h2>
                    <p className="place-card__type">{nearOffer[`type`]}</p>
                  </div>
                </article>
              ))
            }
          </div>
        </section>
      </div>
    );
  }
}

NearOffersList.propTypes = {
  nearOffers: PropTypes.array.isRequired,
};

export default NearOffersList;
