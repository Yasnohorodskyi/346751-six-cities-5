import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {compose} from "redux";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const withActiveCard = (Component) => {
  class WithActiveCard extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeCard: -1,
      };
    }

    render() {
      const {onCardMouseOver} = this.props;

      return (
        <Component
          {...this.props}
          onCardMouseOver={(cardId) => {
            this.setState(() => ({
              activeCard: cardId,
            }));
            onCardMouseOver(cardId);
          }}
        />
      );
    }
  }

  WithActiveCard.propTypes = {
    onCardMouseOver: PropTypes.func.isRequired,
  };

  return WithActiveCard;
};


const mapStateToProps = (state) => ({
  activeCard: state.activeCard,
});

const mapDispatchToProps = (dispatch) => ({
  onCardMouseOver(cardId) {
    dispatch(ActionCreator.activeCardChange(cardId));
  },
});

export {withActiveCard};
export default compose(connect(mapStateToProps, mapDispatchToProps), withActiveCard);
