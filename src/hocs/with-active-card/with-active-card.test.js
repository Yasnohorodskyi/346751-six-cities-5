import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import {withActiveCard} from "./with-active-card";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

const MockComponentHOC = withActiveCard(MockComponent);

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

describe(`withActiveCard render`, () => {
  it(`shoul render correctly`, () => {
    const tree = renderer.create(
        <MockComponentHOC
          onCardMouseOver={() => {}}
        >
          <React.Fragment/>
        </MockComponentHOC>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
