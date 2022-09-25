import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AvarageRatingComponent } from './avarage-rating/avarage-rating.component';
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WebsideVisitorsComponent } from './webside-visitors/webside-visitors.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewsComponent,
    AvarageRatingComponent,
    SentimentAnalysisComponent,
    SidebarComponent,
    WebsideVisitorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
