import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import cn from "classnames";
import {changeFavoriteStatus} from "../../store/api-actions";
import {AuthorizationStatus, AppRoute} from "../../const";
import browserHistory from "../../browser-history";

const FavoriteCard = ({offer, onHover, updateFavoriteStatus, authorizationStatus}) => {
  const {
    id,
    title,
    type,
    rating,
    price,
    [`is_favorite`]: isFavorite,
    [`preview_image`]: previewImage,
  } = offer;

  return (
    <article
      className="favorites__card place-card"
      onMouseOver={onHover}
    >
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={{pathname: `${AppRoute.ROOM}${id}`}}>
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image"/>
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={cn(`place-card__bookmark-button button`, {'place-card__bookmark-button--active': isFavorite})}
            type="button"
            onClick={authorizationStatus === AuthorizationStatus.AUTH ? () => updateFavoriteStatus(id, isFavorite ? 0 : 1) : () => browserHistory.push(AppRoute.LOGIN)}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: Math.round(rating) * 20 + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={{pathname: `${AppRoute.ROOM}${id}`}}>
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
    [`is_favorite`]: PropTypes.bool.isRequired,
    [`preview_image`]: PropTypes.string.isRequired,
  }).isRequired,
  updateFavoriteStatus: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.USER.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  updateFavoriteStatus(id, favoriteStatus) {
    dispatch(changeFavoriteStatus(id, favoriteStatus));
  }
});

export {FavoriteCard};
export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCard);
