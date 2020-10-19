import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import Review from "../review/review";
import CommentForm from "../comment-form/comment-form";

class PropertyScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: ``,
    };
  }

  render() {
    const {offer, firstNeighbourhood, secondNeighbourhood, thirdNeighbourhood, reviews} = this.props;
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
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="main.html">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

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
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                  <ul className="reviews__list">
                    {
                      reviews.map((review, i) => (
                        <Review
                          key={`${i}-review`}
                          review={review}
                        />
                      ))
                    }
                  </ul>
                  {
                    <CommentForm/>
                  }
                </section>
              </div>
            </div>
            <section className="property__map map"></section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {
                  <article className="near-places__card place-card"
                    onMouseOver={() => {
                      this.setState(() => ({
                        activeCard: firstNeighbourhood[`id`],
                      }));
                    }}
                  >
                    <div className="near-places__image-wrapper place-card__image-wrapper">
                      <Link to={{pathname: `/offer/${firstNeighbourhood[`id`]}`}}>
                        <img className="place-card__image" src={firstNeighbourhood[`images`][0]} width="260" height="200" alt="Place image"/>
                      </Link>
                    </div>
                    <div className="place-card__info">
                      <div className="place-card__price-wrapper">
                        <div className="place-card__price">
                          <b className="place-card__price-value">&euro;{firstNeighbourhood[`price`]}</b>
                          <span className="place-card__price-text">&#47;&nbsp;{firstNeighbourhood[`priceText`]}</span>
                        </div>
                        <button className={`place-card__bookmark-button ` + (firstNeighbourhood[`bookmark`] ? `place-card__bookmark-button--active ` : ` `) + `button`} type="button">
                          <svg className="place-card__bookmark-icon" width="18" height="19">
                            <use xlinkHref="#icon-bookmark"></use>
                          </svg>
                          <span className="visually-hidden">In bookmarks</span>
                        </button>
                      </div>
                      <div className="place-card__rating rating">
                        <div className="place-card__stars rating__stars">
                          <span style={{width: Math.round(firstNeighbourhood[`rating`] * 2) * 10 + `%`}}></span>
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <h2 className="place-card__name">
                        <Link to={{pathname: `/offer/${firstNeighbourhood[`id`]}`}}>
                          {firstNeighbourhood[`name`]}
                        </Link>
                      </h2>
                      <p className="place-card__type">{firstNeighbourhood[`type`]}</p>
                    </div>
                  </article>
                }
                {
                  <article className="near-places__card place-card"
                    onMouseOver={() => {
                      this.setState(() => ({
                        activeCard: secondNeighbourhood[`id`],
                      }));
                    }}
                  >
                    <div className="near-places__image-wrapper place-card__image-wrapper">
                      <Link to={{pathname: `/offer/${secondNeighbourhood[`id`]}`}}>
                        <img className="place-card__image" src={secondNeighbourhood[`images`][0]} width="260" height="200" alt="Place image"/>
                      </Link>
                    </div>
                    <div className="place-card__info">
                      <div className="place-card__price-wrapper">
                        <div className="place-card__price">
                          <b className="place-card__price-value">&euro;{secondNeighbourhood[`price`]}</b>
                          <span className="place-card__price-text">&#47;&nbsp;{secondNeighbourhood[`priceText`]}</span>
                        </div>
                        <button className={`place-card__bookmark-button ` + (secondNeighbourhood[`bookmark`] ? `place-card__bookmark-button--active ` : ` `) + `button`} type="button">
                          <svg className="place-card__bookmark-icon" width="18" height="19">
                            <use xlinkHref="#icon-bookmark"></use>
                          </svg>
                          <span className="visually-hidden">In bookmarks</span>
                        </button>
                      </div>
                      <div className="place-card__rating rating">
                        <div className="place-card__stars rating__stars">
                          <span style={{width: Math.round(secondNeighbourhood[`rating`] * 2) * 10 + `%`}}></span>
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <h2 className="place-card__name">
                        <Link to={{pathname: `/offer/${secondNeighbourhood[`id`]}`}}>
                          {secondNeighbourhood[`name`]}
                        </Link>
                      </h2>
                      <p className="place-card__type">{secondNeighbourhood[`type`]}</p>
                    </div>
                  </article>
                }
                {
                  <article className="near-places__card place-card"
                    onMouseOver={() => {
                      this.setState(() => ({
                        activeCard: thirdNeighbourhood[`id`],
                      }));
                    }}
                  >
                    <div className="near-places__image-wrapper place-card__image-wrapper">
                      <Link to={{pathname: `/offer/${thirdNeighbourhood[`id`]}`}}>
                        <img className="place-card__image" src={thirdNeighbourhood[`images`][0]} width="260" height="200" alt="Place image"/>
                      </Link>
                    </div>
                    <div className="place-card__info">
                      <div className="place-card__price-wrapper">
                        <div className="place-card__price">
                          <b className="place-card__price-value">&euro;{thirdNeighbourhood[`price`]}</b>
                          <span className="place-card__price-text">&#47;&nbsp;{thirdNeighbourhood[`priceText`]}</span>
                        </div>
                        <button className={`place-card__bookmark-button ` + (thirdNeighbourhood[`bookmark`] ? `place-card__bookmark-button--active ` : ` `) + `button`} type="button">
                          <svg className="place-card__bookmark-icon" width="18" height="19">
                            <use xlinkHref="#icon-bookmark"></use>
                          </svg>
                          <span className="visually-hidden">In bookmarks</span>
                        </button>
                      </div>
                      <div className="place-card__rating rating">
                        <div className="place-card__stars rating__stars">
                          <span style={{width: Math.round(thirdNeighbourhood[`rating`] * 2) * 10 + `%`}}></span>
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <h2 className="place-card__name">
                        <Link to={{pathname: `/offer/${thirdNeighbourhood[`id`]}`}}>
                          {thirdNeighbourhood[`name`]}
                        </Link>
                      </h2>
                      <p className="place-card__type">{thirdNeighbourhood[`type`]}</p>
                    </div>
                  </article>
                }
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

PropertyScreen.propTypes = {
  offer: PropTypes.shape({
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
  }).isRequired,
  firstNeighbourhood: PropTypes.object.isRequired,
  secondNeighbourhood: PropTypes.object.isRequired,
  thirdNeighbourhood: PropTypes.object.isRequired,
  reviews: PropTypes.array.isRequired,
};

export default PropertyScreen;
