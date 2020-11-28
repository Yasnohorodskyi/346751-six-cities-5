import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withOpenState from "./with-open-state";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

const MockComponentHOC = withOpenState(MockComponent);

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

describe(`withOpenState render`, () => {
  it(`shoul render correctly`, () => {
    const tree = renderer.create(
        <MockComponentHOC>
          <React.Fragment/>
        </MockComponentHOC>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
