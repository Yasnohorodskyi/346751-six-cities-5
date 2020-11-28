import React from "react";
import renderer from "react-test-renderer";
import EmptyResult from "./empty-result";

describe(`EmptyResult render correctly`, () => {
  it(`With city = Paris`, () => {
    const tree = renderer
      .create(
          <EmptyResult
            city={`Paris`}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With city = Hamburg`, () => {
    const tree = renderer
      .create(
          <EmptyResult
            city={`Hamburg`}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
