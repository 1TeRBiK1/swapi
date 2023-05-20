import { combineReducers } from "@reduxjs/toolkit";
import userReduser from "./People/peopleSlice";
import profileSlice from "./Profile/profileSlice";

const appReduser = combineReducers({
  people: userReduser,
  profile: profileSlice,
});

export const rootReduser = (state: any, action: any) => {
  if (action.type === "USER_LOG_OUT") {
    return appReduser(undefined, action);
  }
  return appReduser(state, action);
};
