import {AuthorizationStatus} from "../../../const";
import {ActionType} from "../../action";

const initialState = {
  authorizatioStatus: AuthorizationStatus.NO_AUTH,
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizatioStatus: action.payload,
      });
  }

  return state;
};
