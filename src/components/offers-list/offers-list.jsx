import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

import OfferCard from "../offer-card/offer-card";

class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: ``,
    };

  }

  render() {
    const {renderClassName, renderOfferMark, offers, onCardMouseOver} = this.props;

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
                onCardMouseOver(offer.id);
              }}
              onUnHover={ () => {
                onCardMouseOver(-1);
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
  onCardMouseOver: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeCard: state.activeCard,
});

const mapDispatchToProps = (dispatch) => ({
  onCardMouseOver(cardId) {
    dispatch(ActionCreator.activeCardChange(cardId));
  },
});

export {OffersList};
export default connect(mapStateToProps, mapDispatchToProps)(OffersList);
