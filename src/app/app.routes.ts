import {Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {MainComponent} from "./main/main.component";
import {HomeComponent} from "./home/home.component";
import {FirstComponent} from "./first/first.component";
import {SecondComponent} from "./second/second.component";
import {ThirdComponent} from "./third/third.component";
import {AuthGuard} from "./auth.guard";

export const routes: Routes = [
  {
    path: '', /* just as we go to the app url */
    pathMatch: 'full', /* we have to use pathMatch when redirecting */
    redirectTo: '/main' /* redirect to main if logged in */
  },
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'main', /* name of route */
    component: MainComponent, /* component we get after going on that route */
    canActivate: [AuthGuard], /* Setting guard */
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'first',
        component: FirstComponent
      },
      {
        path: 'second',
        component: SecondComponent
      },
      {
        path: 'third',
        component: ThirdComponent
      }
    ]
  }
];
