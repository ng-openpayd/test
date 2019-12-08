import { LaunchFacadeService } from "./../services/launch-facade.service";
import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-launch-list",
  templateUrl: "./launch-list.component.html",
  styleUrls: ["./launch-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchListComponent {
  constructor(private readonly launchFacade: LaunchFacadeService) {}
  pastLaunches$ = this.launchFacade.pastLaunchListStoreCache();
}
