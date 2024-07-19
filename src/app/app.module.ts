import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuContainerService } from './services/side-menu-container.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { GetdataService } from './services/getdata.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/home/dashboard/dashboard/dashboard.component';
import { AnnouncementsComponent } from './pages/home/announcements/announcements.component';
import { AddNewUserComponent } from './pages/home/users/add-new-user/add-new-user.component';
import { AddnewAnnouncementComponent } from './pages/home/announcements/addnew-announcement/addnew-announcement.component';
import { AuditTrialComponent } from './pages/home/audit-trial/audit-trial.component';
import { CommunicationsComponent } from './pages/home/communications/communications.component';
import { EmailsComponent } from './pages/home/communications/emails/emails.component';
import { GroupMessagesComponent } from './pages/home/communications/group-messages/group-messages.component';
import { TextMessagesComponent } from './pages/home/communications/text-messages/text-messages.component';
import { DoucumentCenterComponent } from './pages/home/doucument-center/doucument-center.component';
import { PaymentsComponent } from './pages/home/payments/payments.component';
import { PlansComponent } from './pages/home/plans/plans.component';
import { AddnewPlanComponent } from './pages/home/plans/addnew-plan/addnew-plan.component';
import { ReportsComponent } from './pages/home/reports/reports.component';
import { SupportTeamComponent } from './pages/home/support-team/support-team.component';
import { AddnewTeamMemberComponent } from './pages/home/support-team/addnew-team-member/addnew-team-member.component';
import { UsersComponent } from './pages/home/users/users.component';
import { AuthComponent } from './pages/auth/auth.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { ApiserviceService } from './services/apiservice.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AdminComponent } from './pages/home/admin/admin.component';
import { CompanySetupComponent } from './pages/home/admin/company-setup/company-setup.component';
import { ServerSettingComponent } from './pages/home/admin/server-setting/server-setting.component';
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';
import { ViewUserComponent } from './pages/home/users/view-user/view-user.component';
import { EditUserComponent } from './pages/home/users/edit-user/edit-user.component';
import { UserListComponent } from './pages/home/users/user-list/user-list.component';
import { UpgradeUserPlanComponent } from './pages/home/users/upgrade-user-plan/upgrade-user-plan.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    AnnouncementsComponent,
    AddNewUserComponent,
    AddnewAnnouncementComponent,
    AuditTrialComponent,
    CommunicationsComponent,
    EmailsComponent,
    GroupMessagesComponent,
    TextMessagesComponent,
    DoucumentCenterComponent,
    PaymentsComponent,
    PlansComponent,
    AddnewPlanComponent,
    ReportsComponent,
    SupportTeamComponent,
    AddnewTeamMemberComponent,
    UsersComponent,
    AuthComponent,
    LoginComponent,
    AdminComponent,
    CompanySetupComponent,
    ServerSettingComponent,
    ForgotPasswordComponent,
    ViewUserComponent,
    EditUserComponent,
    UserListComponent,
    UpgradeUserPlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    ToastrModule.forRoot(),
  ],
  providers: [ SideMenuContainerService, GetdataService , ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
