import React from "react";
import renderer from "react-test-renderer";
import App from "./app";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "../../store/reducers/root-reducer";

const store = createStore(reducer);

describe(`App render`, () => {
  it(`App render`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <App />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
