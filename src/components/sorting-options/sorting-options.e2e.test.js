import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {SortingOptions} from "./sorting-options";
import {SortOptions} from "../../const";

configure({adapter: new Adapter()});

it(`SortingOprtions should call onSortingOptionChange 1 time`, () => {
  const onSortingOptionChange = jest.fn();
  const wrapper = mount(
      <SortingOptions
        sortOption={SortOptions.POPULAR}
        onSortingOptionChange={onSortingOptionChange}
        isOpen={true}
        onOpenButtonClick={() => {}}
      />
  );

  wrapper.find(`.places__option`).at(1).simulate(`click`);

  expect(onSortingOptionChange).toHaveBeenCalledTimes(1);
});
