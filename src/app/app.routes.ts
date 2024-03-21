import { Routes } from '@angular/router';
import { HeadsetsComponent } from './headsets/headsets.component';
import { HomeComponent } from './home/home.component';
import { ApplicationsComponent } from './applications/applications.component';
import { TermsComponent } from './terms/terms.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'applications',
    component: ApplicationsComponent,
  },
  {
    path: 'headsets',
    component: HeadsetsComponent,
  },
  {
    path: 'terms',
    component: TermsComponent,
  },
];
