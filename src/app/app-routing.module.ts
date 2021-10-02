import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ApplicationComponent } from './application/application.component';
import { ApplyComponent } from './apply/apply.component';
import { ApprovedComponent } from './approved/approved.component';
import { ClickhereComponent } from './clickhere/clickhere.component';
import { DocumentsComponent } from './documents/documents.component';
import { EligibiltycalculatorComponent } from './eligibiltycalculator/eligibiltycalculator.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { IncomedetailsComponent } from './incomedetails/incomedetails.component';
import { LoandetailsComponent } from './loandetails/loandetails.component';
import { LoginComponent } from './login/login.component';
import { PasswordsuccessfulComponent } from './passwordsuccessful/passwordsuccessful.component';
import { PendingComponent } from './pending/pending.component';
import { RecoverpasswordComponent } from './recoverpassword/recoverpassword.component';
import { RejectComponent } from './reject/reject.component';
import { UserComponent } from './user/user.component';
import { UserdashComponent } from './userdash/userdash.component';
import { LoantrackerComponent } from './loantracker/loantracker.component';
import { StatusComponent } from './status/status.component';
import { AboutUsComponent } from './about-us/about-us.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'apply',component:ApplyComponent},
  {path:'incomedetails',component:IncomedetailsComponent},
  {path:'loandetails',component:LoandetailsComponent},
  {path:'documents',component:DocumentsComponent},
  {path:'faq',component:FaqComponent},
  {path:'application',component:ApplicationComponent},
  {path:'admin',component:AdminComponent},
  {path:'login',component:LoginComponent},
  {path:'user',component:UserComponent},
  {path:'userdash/username',component:UserdashComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'pending',component:PendingComponent},
  {path:'reject',component:RejectComponent},
  {path:'approved',component:ApprovedComponent},
  {path:'clickhere',component:ClickhereComponent},
  {path:'recoverpassword',component:RecoverpasswordComponent},
  {path:'passwordsuccessful',component:PasswordsuccessfulComponent},
  {path:'eligibiltycalculator',component:EligibiltycalculatorComponent},
  {path: 'loantracker',component:LoantrackerComponent},
  {path: 'status/applicationId',component:StatusComponent},
  {path: 'about-us',component:AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
