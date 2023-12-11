import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './components/admin/admin.component';
import { AdminDashBoardComponent } from './components/admin-dash-board/admin-dash-board.component';
import { HomeComponent } from './components/home/home.component';
import { FaqComponent } from './components/faq/faq.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectDetailComponent } from './/components/project-detail/project-detail.component';
import { ContactComponent } from './components/contact/contact.component';
import { NewProjectFormComponentComponent } from './components/new-project-form.component/new-project-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'adminDashBoard', component: AdminDashBoardComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'project-detail/:id', component: ProjectDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'newproject', component: NewProjectFormComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
