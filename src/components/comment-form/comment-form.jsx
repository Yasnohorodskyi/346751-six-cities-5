import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {postNewReview} from "../../store/api-actions";

class CommentForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
      review: ``,
      formFieldDisabled: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);

    this.formRef = createRef();
    this.errorRef = createRef();
  }

  handleSubmit(evt) {
    const {rating, review} = this.state;
    const {onSubmitAction, currentOfferId} = this.props;

    evt.preventDefault();
    this.setState(() => ({formFieldDisabled: true}));

    onSubmitAction(currentOfferId, {review, rating})
      .then(() => {
        this.formRef.current.reset();
        this.setState(() => ({
          rating: 0,
          review: ``,
          formFieldDisabled: false,
        }));
      })
      .catch(() => {
        this.errorRef.current.textContent = `Something went wrong. Please try again later.`;
        this.setState(() => ({formFieldDisabled: false}));
      });
  }

  handleFieldChange(evt) {
    const {name, value} = evt.target;
    this.setState({[name]: value});
  }

  render() {

    return (
      <form className="reviews__form form" action="#" method="post"
        onSubmit={this.handleSubmit}
        ref={this.formRef}
      >
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" required=""
            onChange={this.handleFieldChange}
            disabled={this.state.formFieldDisabled}
          />
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"
            onChange={this.handleFieldChange}
            disabled={this.state.formFieldDisabled}
          />
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"
            onChange={this.handleFieldChange}
            disabled={this.state.formFieldDisabled}
          />
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"
            onChange={this.handleFieldChange}
            disabled={this.state.formFieldDisabled}
          />
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"
            onChange={this.handleFieldChange}
            disabled={this.state.formFieldDisabled}
          />
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </div>
        <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" required="" maxLength="400"
          onChange={this.handleFieldChange}
          disabled={this.state.formFieldDisabled}
        ></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled={this.state.review.length < 50 || this.state.review.length > 300 || this.state.rating < 1} >
            Submit
          </button>
        </div>
        <p
          ref={this.errorRef}
          style={{color: `red`, fontSize: `16`}}
        />
      </form>
    );
  }
}

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
