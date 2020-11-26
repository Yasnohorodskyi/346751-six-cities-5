import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const OfferCard = (props) => {
  const {offer, onHover, onUnHover} = props;
  const {
    id,
    title,
    type,
    rating,
    price,
    [`is_favorite`]: isFavorite,
    [`preview_image`]: previewImage,
    [`is_premium`]: isPremium
  } = offer;

  return (
    <article
      onMouseEnter={onHover}
      onMouseLeave={onUnHover}
      className={` ${props.renderClassName()}__place-card place-card`}
    >
      {isPremium && props.renderMark() &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={`${props.renderClassName()}__image-wrapper place-card__image-wrapper`}>
        <Link to={{pathname: `/offer/${id}`}}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className={`${props.renderClassName()}__card-info place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ` + (isFavorite ? `place-card__bookmark-button--active ` : ` `) + `button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">

            <span style={{width: Math.round(rating) * 20 + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={{pathname: `/offer/${id}`}}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    [`is_favorite`]: PropTypes.bool.isRequired,
    [`preview_image`]: PropTypes.string.isRequired,
    [`is_premium`]: PropTypes.bool.isRequired,
  }).isRequired,
  onHover: PropTypes.func.isRequired,
  onUnHover: PropTypes.func.isRequired,
  renderClassName: PropTypes.func.isRequired,
  renderMark: PropTypes.func.isRequired,
};

export default OfferCard;
