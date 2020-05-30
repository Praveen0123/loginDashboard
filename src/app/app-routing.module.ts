import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardRegisterComponent } from './dashboard2/dashboard-register/dashboard-register.component';
import { DashboardListComponent } from './dashboard2/dashboard-list/dashboard-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
//   { path: 'dashboard', component: DashboardComponent  },
   { path: 'user', component: UserComponent  },
//  { path:'userdetails/:id', component: UserDetailsComponent},
 {path: 'login',component:LoginComponent},
 {path: 'register',component:RegisterComponent},
 {path:'dashboardregister',component:DashboardRegisterComponent},
 {path:'dashboardlist',component:DashboardListComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
