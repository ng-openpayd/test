import { PastLaunchesListGQL } from "./../../services/spacexGraphql.service";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  loadLaunchList,
  loadLaunchListFail,
  loadLaunchListSuccess
} from "../actions";
import { catchError, map, switchMap } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class LaunchEffects {
  constructor(
    private actions$: Actions,
    private readonly pastLaunchesService: PastLaunchesListGQL
  ) {}

  loadLaunchList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadLaunchList),
      switchMap(() =>
        this.pastLaunchesService.fetch({ limit: 30 }).pipe(
          map((response: any) =>
            loadLaunchListSuccess({
              payload: response.data.launchesPast as any
            })
          ),
          catchError(error => of(loadLaunchListFail(error)))
        )
      )
    )
  );
}
