import React from "react";
import renderer from "react-test-renderer";
import CitiesList from "./cities-list";

const noop = () => {};

describe(`CitiesList render correctly`, () => {
  it(`With empty city`, () => {
    const tree = renderer
      .create(
          <CitiesList
            city={``}
            onCityChange={noop}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With Amsterdam city`, () => {
    const tree = renderer
      .create(
          <CitiesList
            city={`Amsterdam`}
            onCityChange={noop}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
