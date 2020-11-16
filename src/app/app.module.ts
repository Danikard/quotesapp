import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule}from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { QoutesComponent } from './qoutes/qoutes.component';
import { VotesComponent } from './votes/votes.component';
import { QuoteformComponent } from './quoteform/quoteform.component';
import { QuotedetailsComponent } from './quotedetails/quotedetails.component';
import { from } from 'rxjs';
import { HighlightsDirective } from './highlights.directive';
import { DateTrackPipe } from './date-track.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    QoutesComponent,
    VotesComponent,
    QuotedetailsComponent,
    QuoteformComponent,
    QuotedetailsComponent,
    HighlightsDirective,
    DateTrackPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
