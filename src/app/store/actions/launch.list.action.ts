import { createAction, props } from "@ngrx/store";

export const loadLaunchList = createAction("[Launch] Load Launch List");

export const loadLaunchListSuccess = createAction(
  "[Launch] Load Launch List Success",
  props<{ payload: any[] }>()
);

export const loadLaunchListFail = createAction(
  "[Launch] Load Launch List Fail",
  props<{ payload: any }>()
);

export type LaunchListAction =
  | typeof loadLaunchList
  | typeof loadLaunchListSuccess
  | typeof loadLaunchListFail;
