import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import cn from "classnames";

const FavoriteCard = (props) => {
  const {offer, onHover} = props;
  const {
    id,
    title,
    type,
    rating,
    price,
    is_favorite,
    preview_image,
  } = offer;

  return (
    <article
      className="favorites__card place-card"
      onMouseOver={onHover}
    >
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={{pathname: `/offer/${id}`}}>
          <img className="place-card__image" src={preview_image} width="150" height="110" alt="Place image"/>
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={cn(`place-card__bookmark-button button`, {'place-card__bookmark-button--active': is_favorite})} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: Math.round(rating * 2) * 10 + `%`}}></span>
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

FavoriteCard.propTypes = {
  onHover: PropTypes.func.isRequired,
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    is_favorite: PropTypes.bool.isRequired,
    preview_image: PropTypes.string.isRequired,
  }).isRequired,
};

export default FavoriteCard;
