import React from "react";
import PropTypes from "prop-types";

const Review = (props) => {
  const {review} = props;
  const {
    user,
    rating,
    comment,
    date,
  } = review;

  const formatedDate = new Date(date).toLocaleString(`en-US`, {year: `numeric`, month: `long`});

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user[`avatar_url`]} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: Math.round(rating) * 20 + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{formatedDate}</time>
      </div>
    </li>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      [`is_pro`]: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      [`avatar_url`]: PropTypes.string.isRequired,
    }).isRequired,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default Review;
