import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {AuthScreen} from "./auth-screen";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "../../store/reducers/root-reducer";
import {AuthorizationStatus} from "../../const";

configure({adapter: new Adapter()});

const store = createStore(reducer);

it(`AuthScreen should call onSubmit 1 time`, () => {
  const onSubmit = jest.fn();

  const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <AuthScreen
            city={`Paris`}
            authorizationStatus={AuthorizationStatus.NO_AUTH}
            onSubmit={onSubmit}
          />
        </BrowserRouter>
      </Provider>
  );

  wrapper.find(`input[type="email"]`).instance().value = `test@test.com`;
  wrapper.find(`input[type="password"]`).instance().value = `12345678`;
  wrapper.find(`.login__form`).simulate(`submit`, {preventDefault: () => {}});

  expect(onSubmit).toHaveBeenCalledTimes(1);
});
