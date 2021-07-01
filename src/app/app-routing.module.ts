import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { LoginComponent } from './login/login.component';
import { OlympListComponent } from './olymp-list/olymp-list.component';
import { UserOlympListComponent } from './olymp-list/user-olymp-list.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrComponent } from './registr/registr.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'registration', component: RegistrComponent},
  {path: 'list', component: OlympListComponent},
  {path: 'user-list', component: UserOlympListComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
