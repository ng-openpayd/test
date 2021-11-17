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
  public calculateDiffInDays(launchDate) {
    let tDay = new Date(),
      lDate = new Date(launchDate);
    let diff = tDay.getTime() - lDate.getTime();
  
    let diffText = 'Launched ';
    let days = Math.floor(diff / 86400000);
    let years = Math.floor(days / 365);

    if (years > 0) {
       diffText += years + ' year' + (years > 1 ? 's, ' : ', '); 
       days = days % 365;
    }
    diffText += days + ' day' + (days > 1 ? 's' : '') + ' ago'

    return diff > 0 ? diffText : 'Not Launched yet';
  }
  pastLaunches$ = this.launchFacade.pastLaunchListStoreCache();
}
