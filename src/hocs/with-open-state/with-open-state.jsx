import React, {PureComponent} from "react";

const withOpenState = (Component) => {
  class WithOpenState extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isOpen: false,
      };
    }

    render() {
      const {isOpen} = this.state;

      return (
        <Component
          {...this.props}
          isOpen={isOpen}
          onOpenButtonClick={() => {
            this.setState((prevState) => ({
              isOpen: !prevState.isOpen
            }));
          }}
        />
      );
    }
  }

  return WithOpenState;
};

export default withOpenState;
