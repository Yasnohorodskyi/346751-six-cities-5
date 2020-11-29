import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CitiesList from "./cities-list";

configure({adapter: new Adapter()});

it(`CitiesList should call onCityChange 1 time`, () => {
  const onCityChange = jest.fn();

  const wrapper = mount(
      <CitiesList
        city={`Paris`}
        onCityChange={onCityChange}
      />
  );

  wrapper.find(`li.locations__item`).at(2).simulate(`click`);

  expect(onCityChange).toHaveBeenCalledTimes(1);
});
