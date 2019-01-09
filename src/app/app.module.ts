import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MeetingsComponent } from './components/meetings/meetings.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DistrictComponent } from './components/district/district.component';
import { ProfessionalsComponent } from './components/professionals/professionals.component';
import { ConferenceComponent } from './components/conference/conference.component';
import { StepsComponent } from './components/steps/steps.component';
import { TraditionsComponent } from './components/traditions/traditions.component';
import { ConceptsComponent } from './components/concepts/concepts.component';
import { InformationComponent } from './components/information/information.component';
import { LinksComponent } from './components/links/links.component';
import { GuidelinesComponent } from './components/guidelines/guidelines.component';
import { DirectoryComponent } from './components/directory/directory.component';
import { BridgingTheGapComponent } from './components/bridging-the-gap/bridging-the-gap.component';
import { ServiceComponent } from './components/service/service.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CallbackComponent } from './components/callback/callback.component';
import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './services/auth/auth.guard';
import { HeaderComponent } from './components/header/header.component';

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
    ServiceComponent,
    PageNotFoundComponent,
    CallbackComponent,
    HeaderComponent
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
    AuthService, AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
