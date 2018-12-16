import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MeetingsComponent } from './components/meetings/meetings.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DistrictComponent } from './components/district/district.component';
import { ProfessionalsComponent } from './components/professionals/professionals.component';
import { ConferenceComponent } from './components/conference/conference.component';
import { BridgingTheGapComponent } from './components/bridging-the-gap/bridging-the-gap.component';
import { StepsComponent } from './components/steps/steps.component';
import { TraditionsComponent } from './components/traditions/traditions.component';
import { ConceptsComponent } from './components/concepts/concepts.component';
import { InformationComponent } from './components/information/information.component';
import { LinksComponent } from './components/links/links.component';
import { GuidelinesComponent } from './components/guidelines/guidelines.component';
import { DirectoryComponent } from './components/directory/directory.component';
import { ServiceComponent } from './components/service/service.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './services/auth/auth.guard';
import { CallbackComponent } from './components/callback/callback.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'meetings', component: MeetingsComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'district', component: DistrictComponent },
  { path: 'professionals', component: ProfessionalsComponent },
  { path: 'conference', component: ConferenceComponent },
  { path: 'bridging-the-gap', component: BridgingTheGapComponent },
  { path: 'steps', component: StepsComponent },
  { path: 'traditions', component: TraditionsComponent },
  { path: 'concepts', component: ConceptsComponent },
  { path: 'information', component: InformationComponent },
  { path: 'links', component: LinksComponent },
  { path: 'guidelines', component: GuidelinesComponent },
  { path: 'directory', component: DirectoryComponent },
  { path: 'service', component: ServiceComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent },
  { path: 'callback', component: CallbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
