import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BridgingTheGapModule } from './bridging-the-gap/bridging-the-gap.module';
import { CalendarModule } from './calendar/calendar.module';
import { CallbackComponent } from './callback/callback.component';
import { ConceptsModule } from './concepts/concepts.module';
import { ConferenceModule } from './conference/conference.module';
import { DirectoryModule } from './directory/directory.module';
import { DistrictModule } from './district/district.module';
import { FooterComponent } from './footer/footer.component';
import { GuidelinesModule } from './guidelines/guidelines.module';
import { HeaderComponent } from './header/header.component';
import { HomeModule } from './home/home.module';
import { InformationModule } from './information/information.module';
import { LinksModule } from './links/links.module';
import { LoginModule } from './login/login.module';
import { MeetingsModule } from './meetings/meetings.module';
import { NavComponent } from './nav/nav.component';
import { ProfessionalsModule } from './professionals/professionals.module';
import { ServiceModule } from './service/service.module';
import { StepsModule } from './steps/steps.module';
import { TraditionsModule } from './traditions/traditions.module';
import { UserModule } from './user/user.module';
import { HttpStatusService } from './http/http.status.service';
import { AppHttpInterceptor } from './http/app-http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent
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
    LoginModule,
    MeetingsModule,
    ProfessionalsModule,
    ServiceModule,
    StepsModule,
    TraditionsModule,
    UserModule
  ],
  providers: [
    HttpStatusService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
