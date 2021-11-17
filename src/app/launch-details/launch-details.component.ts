import { Component, ChangeDetectionStrategy, ViewChild, OnInit} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, switchMap } from "rxjs/operators";
import { LaunchDetailsGQL } from "../services/spacexGraphql.service";
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: "app-launch-details",
  templateUrl: "./launch-details.component.html",
  styleUrls: ["./launch-details.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchDetailsComponent {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly launchDetailsService: LaunchDetailsGQL
  ) {}
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  public assignImagesItoGallery(launchData) {
    this.galleryImages = launchData.links.flickr_images.map(img => 
      {
        return {
          small: img,
          medium: img,
          big: img
        }
      }
    )
    return launchData;
  };

  launchDetails$ = this.route.paramMap.pipe(
    map(params => params.get("id") as string),
    switchMap(id => this.launchDetailsService.fetch({ id })),
    map(res => this.assignImagesItoGallery(res.data.launch))
  );

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '600px',
        height: '600px',
        thumbnailsColumns: 3,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      {
        breakpoint: 800,
        width: '600px',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      {
        breakpoint: 400,
        preview: false
      }
  ];
  this.galleryImages = [];
  }
}
