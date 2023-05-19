import { combineReducers } from "@reduxjs/toolkit";
import userReduser from "./People/peopleSlice";

const appReduser = combineReducers({
  people: userReduser,
});

export const rootReduser = (state: any, action: any) => {
  if (action.type === "USER_LOG_OUT") {
    return appReduser(undefined, action);
  }
  return appReduser(state, action);
};
