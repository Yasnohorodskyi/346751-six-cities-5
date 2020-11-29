import {ActionType} from "../../action";
import {process} from "./process";
import {Cities, SortOptions} from "../../../const";


describe(`Process reducer test`, () => {
  it(`should return initial state`, () => {
    expect(process(void 0, {})).toEqual({
      city: Cities[0],
      sortOption: SortOptions.POPULAR,
      activeCard: -1,
    });
  });

  it(`should change city by CITY_CHANGE`, () => {
    expect(process({
      city: Cities[0],
    }, {
      type: ActionType.CITY_CHANGE,
      payload: Cities[1],
    })).toEqual({
      city: Cities[1]
    });
  });

  it(`should change sorting option by SORTING_OPTION_CHANGE`, () => {
    expect(process({
      sortOption: SortOptions.POPULAR
    }, {
      type: ActionType.SORTING_OPTION_CHANGE,
      payload: SortOptions.RATING
    })).toEqual({
      sortOption: SortOptions.RATING
    });
  });

  it(`should change sorting option by ACTIVE_CARD_CHANGE`, () => {
    expect(process({
      activeCard: -1,
    }, {
      type: ActionType.ACTIVE_CARD_CHANGE,
      payload: 11
    })).toEqual({
      activeCard: 11,
    });
  });
});
