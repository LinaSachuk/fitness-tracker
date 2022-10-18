import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'training',
    component: TrainingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
