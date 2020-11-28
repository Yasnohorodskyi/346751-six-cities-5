import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withOpenState from "./with-open-state";

configure({adapter: new Adapter()});

const MockComponent = () => <div/>;
const MockComponentHOC = withOpenState(MockComponent);

it(`withOpenState should return isOpen state false`, () => {
  const wrapper = shallow(<MockComponentHOC/>);

  expect(wrapper.state().isOpen).toEqual(false);
});
