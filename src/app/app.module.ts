import { launchReducers } from "./store/reducers/index";
import { launchEffects } from "./store/effects/index";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LaunchListComponent } from "./launch-list/launch-list.component";
import { LaunchDetailsComponent } from "./launch-details/launch-details.component";
import { GraphQLModule } from "./graphql.module";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import { RelativeTimePipe } from "./core/helpers/pipes/relative-time/relative-time.pipe";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { DifferenceInDaysPipe } from './difference-in-days.pipe';
import { NgxSlickJsModule } from "ngx-slickjs";

@NgModule({
  declarations: [
    AppComponent,
    LaunchListComponent,
    LaunchDetailsComponent,
    RelativeTimePipe,
    DifferenceInDaysPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    StoreModule.forRoot(launchReducers),
    EffectsModule.forRoot(launchEffects),
    StoreDevtoolsModule.instrument(),
    NgxSlickJsModule.forRoot({
      links: {
        jquery: "https://code.jquery.com/jquery-3.4.0.min.js",
        slickJs:
          "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js",
        slickCss:
          "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css",
        slickThemeCss:
        "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
