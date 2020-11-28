import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from "./reviews-list";
import {reviews} from "../../../mocks/mocks";

describe(`ReviewsList render`, () => {
  it(`should render without reviews`, () => {
    const tree = renderer
      .create(
          <ReviewsList
            reviews={[]}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render with one review`, () => {
    const tree = renderer
      .create(
          <ReviewsList
            reviews={reviews.slice(0, 1)}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render with two reviews`, () => {
    const tree = renderer
      .create(
          <ReviewsList
            reviews={reviews}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
