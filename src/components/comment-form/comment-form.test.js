import React from "react";
import renderer from "react-test-renderer";
import {CommentForm} from "./comment-form";

const noop = () => {};

describe(`CommentForm render correctly`, () => {
  it(`With currentOFferId = 0`, () => {
    const tree = renderer
      .create(
          <CommentForm
            currentOfferId={0}
            onSubmitAction={noop}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With currentOFferId = 1`, () => {
    const tree = renderer
      .create(
          <CommentForm
            currentOfferId={1}
            onSubmitAction={noop}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With currentOFferId = -1`, () => {
    const tree = renderer
      .create(
          <CommentForm
            currentOfferId={-1}
            onSubmitAction={noop}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
