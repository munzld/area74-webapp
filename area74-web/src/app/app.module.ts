import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CallbackComponent } from './callback/callback.component';
import { AuthService } from './user/auth.service';
import { AuthGuard } from './user/auth.guard';
import { HeaderComponent } from './header/header.component';
import { BridgingTheGapModule } from './bridging-the-gap/bridging-the-gap.module';
import { CalendarModule } from './calendar/calendar.module';
import { ConceptsModule } from './concepts/concepts.module';
import { ConferenceModule } from './conference/conference.module';
import { DirectoryModule } from './directory/directory.module';
import { DistrictModule } from './district/district.module';
import { GuidelinesModule } from './guidelines/guidelines.module';
import { HomeModule } from './home/home.module';
import { InformationModule } from './information/information.module';
import { LinksModule } from './links/links.module';
import { MeetingsModule } from './meetings/meetings.module';
import { ProfessionalsModule } from './professionals/professionals.module';
import { ServiceModule } from './service/service.module';
import { StepsModule } from './steps/steps.module';
import { TraditionsModule } from './traditions/traditions.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    PageNotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    BridgingTheGapModule,
    BrowserModule,
    CalendarModule,
    ConceptsModule,
    ConferenceModule,
    DirectoryModule,
    DistrictModule,
    GuidelinesModule,
    HomeModule,
    HttpClientModule,
    InformationModule,
    LinksModule,
    MeetingsModule,
    ProfessionalsModule,
    ServiceModule,
    StepsModule,
    TraditionsModule,
    UserModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
