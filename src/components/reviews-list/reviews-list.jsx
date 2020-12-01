import React from "react";
import PropTypes from "prop-types";
import Review from "../review/review";

const ReviewsList = ({reviews}) => {

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        { !!reviews.length &&
          reviews.slice(0, 10).map((review, i) => (
            <Review
              key={`${i}-review`}
              review={review}
            />
          ))
        }
      </ul>
    </>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewsList;
