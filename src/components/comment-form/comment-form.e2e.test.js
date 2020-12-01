import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {CommentForm} from "./comment-form";
import {act} from "react-dom/test-utils";

configure({adapter: new Adapter()});

it(`CommentForm should call onSubmitAction 1 time`, async () => {
  const onSubmitAction = jest.fn().mockResolvedValueOnce(true);
  const wrapper = mount(
      <CommentForm
        onSubmitAction={onSubmitAction}
        currentOfferId={1}

      />
  );

  wrapper.find(`.reviews__form`).simulate(`submit`, {preventDefault: () => {}});
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });

  expect(onSubmitAction).toHaveBeenCalledTimes(1);
});
