import { createReducer, on } from "@ngrx/store";
import {
  LaunchListAction,
  loadLaunchList,
  loadLaunchListFail,
  loadLaunchListSuccess
} from "../actions";

export type LaunchListState = any;

const initialState: LaunchListState = {
  data: [],
  loaded: false,
  loading: false,
  error: null
};

const launchListReducer = createReducer(
  initialState,
  on(loadLaunchList, state => ({
    ...state,
    loading: true,
    loaded: false
  })),
  on(loadLaunchListSuccess, (state, { payload }) => {
    return {
      ...state,
      data: payload,
      loading: false,
      loaded: true
    };
  }),
  on(loadLaunchListFail, (state, { payload }) => ({
    ...initialState,
    error: payload
  }))
);

export function reducer(
  state: LaunchListState | undefined,
  action: LaunchListAction
) {
  return launchListReducer(state, action);
}
