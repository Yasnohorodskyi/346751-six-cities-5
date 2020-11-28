import {ActionType} from "../../action";
import {user} from "./user";
import {AuthorizationStatus} from "../../../const";

describe(`User reducer test`, () => {
  it(`should return initial state`, () => {
    expect(user(void 0, {})).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      email: ``,
    });
  });

  it(`should change Authorization status by REQUIRED_AUTHORIZATION`, () => {
    expect(user({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      email: ``,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: {
        status: AuthorizationStatus.AUTH,
        email: `test@test.com`
      }
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      email: `test@test.com`
    });
  });
});
