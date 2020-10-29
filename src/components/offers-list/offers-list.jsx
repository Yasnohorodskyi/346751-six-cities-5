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
    };

    this._sortingOffers = this._sortingOffers.bind(this);
  }

  _sortingOffers() {
    const {offers, sortOption} = this.props;
    let sortedOffers = offers.slice(0);

    switch (sortOption) {
      case SortOptions.popular:
        return offers;

      case SortOptions.lowToHigh:
        sortedOffers.sort((a, b) => (a.price > b.price ? 1 : -1));
        return sortedOffers;

      case SortOptions.highToLow:
        sortedOffers.sort((a, b) => (a.price > b.price ? -1 : 1));
        return sortedOffers;

      case SortOptions.rating:
        sortedOffers.sort((a, b) => (a.rating > b.rating ? -1 : 1));
        return sortedOffers;
    }

    return offers;
  }

  render() {
    const {renderClassName, renderOfferMark} = this.props;

    return (
      <div className={`${renderClassName()} places__list`}>
        {
          this._sortingOffers().map((offer) => (
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
