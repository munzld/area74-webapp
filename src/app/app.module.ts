import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    CoreModule,
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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AuthModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
