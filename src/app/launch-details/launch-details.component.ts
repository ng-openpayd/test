import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, switchMap } from "rxjs/operators";
import { LaunchDetailsGQL } from "../services/spacexGraphql.service";
import { Slick } from 'ngx-slickjs';

@Component({
  selector: "app-launch-details",
  templateUrl: "./launch-details.component.html",
  styleUrls: ["./launch-details.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchDetailsComponent {
  current_image = 0;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly launchDetailsService: LaunchDetailsGQL,
  ) {}

  launchDetails$ = this.route.paramMap.pipe(
    map(params => params.get("id") as string),
    switchMap(id => this.launchDetailsService.fetch({ id })),
    map(res => res.data.launch)
  );

  config: Slick.Config = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    prevArrow: '<i class="material-icons" style="position:absolute;top:36%;left:-10px;cursor:pointer;">arrow_back_ios</i>',
    nextArrow: '<i class="material-icons" style="position:absolute;top:36%;right:-18px;cursor:pointer;">arrow_forward_ios</i>'
  }
}
