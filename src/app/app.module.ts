import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { QoutesComponent } from './qoutes/qoutes.component';
import { VotesComponent } from './votes/votes.component';
import { QuoteformComponent } from './quoteform/quoteform.component';
import { QuotedetailsComponent } from './quotedetails/quotedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    QoutesComponent,
    VotesComponent,
    QuotedetailsComponent,
    QuoteformComponent,
    QuotedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
