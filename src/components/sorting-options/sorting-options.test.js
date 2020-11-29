import React from "react";
import renderer from "react-test-renderer";
import {SortingOptions} from "./sorting-options";
import {SortOptions} from "../../const";

describe(`SortingOptions render`, () => {
  it(`should render with popular`, () => {
    const tree = renderer
      .create(
          <SortingOptions
            sortOption={SortOptions.POPULAR}
            onSortingOptionChange={() => {}}
            isOpen={false}
            onOpenButtonClick={() => {}}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render with rating`, () => {
    const tree = renderer
      .create(
          <SortingOptions
            sortOption={SortOptions.RATING}
            onSortingOptionChange={() => {}}
            isOpen={false}
            onOpenButtonClick={() => {}}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render open`, () => {
    const tree = renderer
      .create(
          <SortingOptions
            sortOption={SortOptions.POPULAR}
            onSortingOptionChange={() => {}}
            isOpen={true}
            onOpenButtonClick={() => {}}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
