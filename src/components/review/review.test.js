import React from "react";
import renderer from "react-test-renderer";
import Review from "./review";
import {reviews} from "../../../mocks/mocks";

describe(`Review render`, () => {
  it(`should render correctly`, () => {
    const tree = renderer
      .create(
          <Review
            key={1}
            review={reviews[0]}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
