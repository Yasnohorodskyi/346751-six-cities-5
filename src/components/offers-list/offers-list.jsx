import React from "react";
import PropTypes from "prop-types";

import OfferCard from "../offer-card/offer-card";

const OffersList = (props) => {
  const {
    renderClassName,
    renderOfferMark,
    offers,
    onCardMouseOver
  } = props;

  return (

    <div className={`${renderClassName()} places__list`}>
      {
        offers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            onHover={() => (onCardMouseOver(offer.id))}
            onUnHover={() => (onCardMouseOver(-1))}
            renderClassName={() => (`cities`)}
            renderMark={() => (renderOfferMark())}
          />
        ))
      }
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.array.isRequired,
  renderClassName: PropTypes.func.isRequired,
  renderOfferMark: PropTypes.func.isRequired,
  onCardMouseOver: PropTypes.func.isRequired,
};

export default OffersList;
