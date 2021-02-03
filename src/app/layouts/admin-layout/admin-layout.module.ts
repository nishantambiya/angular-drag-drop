import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatExpansionModule} from '@angular/material/expansion';
import {RequestsComponent} from '../../components/requests/requests.component';
import {ProfileComponent} from '../../components/profile/profile.component';
import {CompanyProfileComponent} from '../../components/company-profile/company-profile.component';
import {ProjectsComponent} from '../../components/projects/projects.component';
import {ResponsesComponent} from '../../components/responses/responses.component';
import {SavingsByProjectComponent} from '../../components/savings-by-project/savings-by-project.component';
import {SavingsBySpentCategoryComponent} from '../../components/savings-by-spent-category/savings-by-spent-category.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    CdkStepperModule,
    DragDropModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,
    MatTooltipModule,
    MatExpansionModule,
    MatListModule,
      MatIconModule

  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    RequestsComponent,
    ProfileComponent,
    CompanyProfileComponent,
    ProjectsComponent,
    ResponsesComponent,
    SavingsByProjectComponent,
    SavingsBySpentCategoryComponent
  ]
})

export class AdminLayoutModule {}
