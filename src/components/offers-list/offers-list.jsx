import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {SortOptions} from "../../const";

import OfferCard from "../offer-card/offer-card";

class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: ``,
      sortOption: this.props.sortOption,
    };
  }

  sortingOffers() {
    const {offers} = this.props;

    switch (this.state.sortOption) {
      case SortOptions.popular:
        return offers

      case SortOptions.lowToHigh:
        const offers = offers
          .slice(0)
          .sort((a,b) => {
          return a.price - b.price;
        });
        return offers
    }
  }

  render() {
    const {renderClassName, renderOfferMark, offers} = this.props;

    return (
      <div className={`${renderClassName()} places__list`}>
        {
          offers.map((offer, i) => (
            <OfferCard
              key={`${i}-offer`}
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
  sortOption: PropTypes.string.isRequired,
  renderClassName: PropTypes.func.isRequired,
  renderOfferMark: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  sortOption: state.sortOption,
});

export {OffersList};
export default connect(mapStateToProps)(OffersList);
