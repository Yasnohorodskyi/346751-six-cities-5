import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import OfferCard from "../offer-card/offer-card";

class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: ``,
    };

  }

  render() {
    const {renderClassName, renderOfferMark, offers} = this.props;

    return (
      <div className={`${renderClassName()} places__list`}>
        {
          offers.map((offer) => (
            <OfferCard
              key={offer.id}
              offer={offer}
              onHover={() => {
                this.setState(() => ({
                  activeCard: offer[`id`],
                }));
              }}
              renderClassName={() => (`cities`)}
              renderMark={() => (renderOfferMark())}
            />
          ))
        }
      </div>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.array.isRequired,
  renderClassName: PropTypes.func.isRequired,
  renderOfferMark: PropTypes.func.isRequired,
};

export default OffersList;
