import React, {useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {extend} from "../../utils";

import {postNewReview} from "../../store/api-actions";

const CommentForm = ({onSubmitAction, currentOfferId}) => {
  const [isSubmitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [isFormFieldDisabled, setFormFieldDisabled] = useState(false);
  const [isSubmitError, setSubmitError] = useState(false);
  const [comment, setComment] = useState({
    rating: 0,
    review: ``,
  });

  const {rating, review} = comment;

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const handleMultiplyClick = new Promise((resolve) => {
      setSubmitButtonDisabled(true);
      resolve();
    });

    handleMultiplyClick.then(() => {
      setFormFieldDisabled(true);
      onSubmitAction(currentOfferId, {review, rating})
        .then(() => {
          setComment({
            rating: 0,
            review: ``,
          });
          setFormFieldDisabled(false);
          setSubmitButtonDisabled(false);
        })
        .catch(() => {
          setSubmitError(true);
          setFormFieldDisabled(false);
          setSubmitButtonDisabled(false);
        });
    });

    setSubmitError(false);
  };

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    setComment((prevComment) => extend(prevComment, {[name]: value}));
  };

  const isFormFieldsFill = () => (
    review.length < 50 || review.length > 300 || rating < 1
  );

  return (
    <form className="reviews__form form" action="#" method="post"
      onSubmit={(evt) => handleSubmit(evt)}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" required=""
          onChange={(evt) => handleFieldChange(evt)}
          disabled={isFormFieldDisabled}
          checked={rating === `5`}
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"
          onChange={(evt) => handleFieldChange(evt)}
          disabled={isFormFieldDisabled}
          checked={rating === `4`}
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"
          onChange={(evt) => handleFieldChange(evt)}
          disabled={isFormFieldDisabled}
          checked={rating === `3`}
        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"
          onChange={(evt) => handleFieldChange(evt)}
          disabled={isFormFieldDisabled}
          checked={rating === `2`}
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"
          onChange={(evt) => handleFieldChange(evt)}
          disabled={isFormFieldDisabled}
          checked={rating === `1`}
        />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" required="" maxLength="400"
        onChange={(evt) => handleFieldChange(evt)}
        disabled={isFormFieldDisabled}
        value={review}
      ></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isFormFieldsFill() || isSubmitButtonDisabled}
        >
          Submit
        </button>
      </div>
      <p style={{color: `red`, fontSize: `16`}} hidden={!isSubmitError}>Something went wrong. Please try again later.</p>

    </form>
  );
};

CommentForm.propTypes = {
  onSubmitAction: PropTypes.func.isRequired,
  currentOfferId: PropTypes.number.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmitAction(currentOfferId, reviewData) {
    return dispatch(postNewReview(currentOfferId, reviewData));
  },
});

export {CommentForm};
export default connect(null, mapDispatchToProps)(CommentForm);
