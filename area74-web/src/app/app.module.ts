import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MeetingsComponent } from './meetings/meetings.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DistrictComponent } from './district/district.component';
import { ProfessionalsComponent } from './professionals/professionals.component';
import { ConferenceComponent } from './conference/conference.component';
import { StepsComponent } from './steps/steps.component';
import { TraditionsComponent } from './traditions/traditions.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { InformationComponent } from './information/information.component';
import { LinksComponent } from './links/links.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { DirectoryComponent } from './directory/directory.component';
import { BridgingTheGapComponent } from './bridging-the-gap/bridging-the-gap.component';
import { AlertComponent } from './alert/alert.component';
import { ServiceComponent } from './service/service.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './jwt.interceptor';
import { ErrorInterceptor } from './error.interceptor';
import { fakeBackendProvider } from './fake-backend';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    MeetingsComponent,
    CalendarComponent,
    DistrictComponent,
    ProfessionalsComponent,
    ConferenceComponent,
    StepsComponent,
    TraditionsComponent,
    ConceptsComponent,
    InformationComponent,
    LinksComponent,
    GuidelinesComponent,
    DirectoryComponent,
    BridgingTheGapComponent,
    AlertComponent,
    ServiceComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
