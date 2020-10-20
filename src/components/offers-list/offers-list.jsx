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
    const {offers} = this.props;

    return (
      offers.map((offer) => (
        <OfferCard
          key={`${offer[`id`]}`}
          offer={offer}
          onHover={() => {
            this.setState(() => ({
              activeCard: offer[`id`],
            }));
          }}
        />
      ))
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default OffersList;
