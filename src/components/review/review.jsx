import React from "react";
import PropTypes from "prop-types";

const Review = (props) => {
  const {review} = props;
  const {
    name,
    avatar,
    rating,
    text,
    dateTime,
    date,
  } = review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: Math.round(rating * 2) * 10 + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime={dateTime}>{date}</time>
      </div>
    </li>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    dateTime: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default Review;
