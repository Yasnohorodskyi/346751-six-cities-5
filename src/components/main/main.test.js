import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

describe(`Main render`, () => {
  it(`should render correctly`, () => {
    const tree = renderer
      .create(
          <Main
            renderClassName={() => {}}
          >
            <React.Fragment/>
          </Main>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
