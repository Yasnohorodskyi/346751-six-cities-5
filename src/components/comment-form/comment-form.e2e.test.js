import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {CommentForm} from "./comment-form";

configure({adapter: new Adapter()});

it(`CommentForm should call onSubmitAction 1 time`, () => {
  const onSubmitAction = jest.fn(() => {
    return Promise.resolve(jest.fn());
  });
  const wrapper = mount(
      <CommentForm
        onSubmitAction={onSubmitAction}
        currentOfferId={1}
      />
  );

  wrapper.find(`.reviews__form`).simulate(`submit`, {preventDefault: () => {}});

  expect(onSubmitAction).toHaveBeenCalledTimes(1);
});
