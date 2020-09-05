import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { LoginAgainComponent } from './login-again/login-again.component';
const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full',component: TableComponent },
  {path:'details', component: StudentDetailComponent},
  {path:'edit-details', component: EditDetailsComponent},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'forgetpassword', component: ForgetPasswordComponent},
  {path:'login-again', component: LoginAgainComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [StudentDetailComponent,TableComponent];