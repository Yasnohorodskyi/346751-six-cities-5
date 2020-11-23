import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import ReviewItem from "../review-item/review-item";
import CommentForm from "../comment-form/comment-form";

import {AuthorizationStatus} from "../../const";

const ReviewsList = ({reviews, authorizationStatus}) => {

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        { !!reviews.length &&
          reviews.map((review, i) => (
            <ReviewItem
              key={`${i}-review`}
              review={review}
            />
          ))
        }
      </ul>
      { authorizationStatus === AuthorizationStatus.AUTH &&
        <CommentForm/>
      }
    </section>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.USER.authorizationStatus,
});

export {ReviewsList};
export default connect(mapStateToProps)(ReviewsList);
