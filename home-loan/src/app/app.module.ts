import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoanListComponent } from './loan-list/loan-list.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { LoanSummaryComponent } from './loan-summary/loan-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    LoanListComponent,
    LoanDetailsComponent,
    LoanSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
