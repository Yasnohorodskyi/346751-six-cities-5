import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {withActiveCard} from "./with-active-card";

configure({adapter: new Adapter()});

const MockComponent = () => <div/>;
const MockComponentHOC = withActiveCard(MockComponent);

it(`withActiveCard should return activeCard state -1`, () => {
  const wrapper = shallow(
      <MockComponentHOC
        onCardMouseOver={() => {}}
      />
  );

  expect(wrapper.state().activeCard).toEqual(-1);
});
