import { ActionReducerMap } from "@ngrx/store";
import * as fromLaunchList from "./launch-list.reducer";

export interface LaunchListState {
  launchList: fromLaunchList.LaunchListState;
}

export const launchReducers: ActionReducerMap<LaunchListState, any> = {
  launchList: fromLaunchList.reducer
};
