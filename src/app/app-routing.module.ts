import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/home/dashboard/dashboard/dashboard.component';
import { UsersComponent } from './pages/home/users/users.component';
import { AddNewUserComponent } from './pages/home/users/add-new-user/add-new-user.component';
import { PlansComponent } from './pages/home/plans/plans.component';
import { AddnewPlanComponent } from './pages/home/plans/addnew-plan/addnew-plan.component';
import { PaymentsComponent } from './pages/home/payments/payments.component';
import { AnnouncementsComponent } from './pages/home/announcements/announcements.component';
import { AddnewAnnouncementComponent } from './pages/home/announcements/addnew-announcement/addnew-announcement.component';
import { SupportTeamComponent } from './pages/home/support-team/support-team.component';
import { AddnewTeamMemberComponent } from './pages/home/support-team/addnew-team-member/addnew-team-member.component';
import { CommunicationsComponent } from './pages/home/communications/communications.component';
import { EmailsComponent } from './pages/home/communications/emails/emails.component';
import { TextMessagesComponent } from './pages/home/communications/text-messages/text-messages.component';
import { GroupMessagesComponent } from './pages/home/communications/group-messages/group-messages.component';
import { AuditTrialComponent } from './pages/home/audit-trial/audit-trial.component';
import { DoucumentCenterComponent } from './pages/home/doucument-center/doucument-center.component';
import { ReportsComponent } from './pages/home/reports/reports.component';
import { AdminComponent } from './pages/home/admin/admin.component';
import { CompanySetupComponent } from './pages/home/admin/company-setup/company-setup.component';
import { ServerSettingComponent } from './pages/home/admin/server-setting/server-setting.component';
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';
import { AuthGaurdGuard } from './app-gaurd/auth-gaurd.guard';
import { ViewUserComponent } from './pages/home/users/view-user/view-user.component';
import { UserListComponent } from './pages/home/users/user-list/user-list.component';
import { EditUserComponent } from './pages/home/users/edit-user/edit-user.component';
import { UpgradeUserPlanComponent } from './pages/home/users/upgrade-user-plan/upgrade-user-plan.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGaurdGuard],

    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,

      },
      {
        path: 'users',
        component: UsersComponent,
        children: [
          {
            path: '',
            redirectTo: 'user-list',
            pathMatch: 'full'
          },
          {
            path: 'user-list',
            component: UserListComponent
          },
          {
            path: 'add-new-user',
            component: AddNewUserComponent
          },
          {
            path: 'view-user',
            component: ViewUserComponent
          },
          {
            path: 'edit-user',
            component: EditUserComponent
          },
          {
            path: 'upgrade-plan',
            component: UpgradeUserPlanComponent
          },
        ]
      },
      {
        path: 'plans',
        component: PlansComponent
      },
      {
        path: 'plans/addnew-plan',
        component: AddnewPlanComponent
      },

      {
        path: 'payments',
        component: PaymentsComponent
      }
      ,
      {
        path: 'announcements',
        component: AnnouncementsComponent
      },
      {
        path: 'announcements/addnew-annoucements',
        component: AddnewAnnouncementComponent
      }
      ,
      {
        path: 'support-team',
        component: SupportTeamComponent
      },
      {
        path: 'support-team/addnew-team-member',
        component: AddnewTeamMemberComponent
      }
      ,
      {
        path: 'communications',
        component: CommunicationsComponent,
        children: [
          {
            path: '',
            redirectTo: 'emails',
            pathMatch: 'full'
          },

          {
            path: 'emails',
            component: EmailsComponent
          },
          {
            path: 'text-Messages',
            component: TextMessagesComponent
          },
          {
            path: 'groupMessages',
            component: GroupMessagesComponent
          },
        ]
      }
      ,
      {
        path: 'audit-trial',
        component: AuditTrialComponent
      }
      ,
      {
        path: 'documents-center',
        component: DoucumentCenterComponent
      }
      ,
      {
        path: 'reports',
        component: ReportsComponent
      },
      {
        path: 'admin',
        component: AdminComponent,
        children: [
          {
            path: '',
            redirectTo: 'companySetup',
            pathMatch: 'full'

          },
          {
            path: 'companySetup',
            component: CompanySetupComponent
          },
          {
            path: 'serverSetting',
            component: ServerSettingComponent
          }

        ]
      }

    ]
  },

  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'forgotPassowrd',
        component: ForgotPasswordComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
