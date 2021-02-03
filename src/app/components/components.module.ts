import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RequestsComponent } from './requests/requests.component';
import { ProfileComponent } from './profile/profile.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResponsesComponent } from './responses/responses.component';
import { SavingsByProjectComponent } from './savings-by-project/savings-by-project.component';
import { SavingsBySpentCategoryComponent } from './savings-by-spent-category/savings-by-spent-category.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,

  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
  ]
})
export class ComponentsModule { }
