import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './pages/home/home.module';
import { CreateProjectFormModule } from './shared/components/create-project-form/create-project-form.module';
import { ViewProjectModule } from './shared/components/view-project/view-project.module';
import { HomeComponent } from './pages/home/home.component';
import { CreateProjectFormComponent } from './shared/components/create-project-form/create-project-form.component';
import { ViewProjectComponent } from './shared/components/view-project/view-project.component';
import { HelpComponent } from './pages/help/help.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'create-project',
        component: CreateProjectFormComponent
      },
      {
        path: 'view-project',
        component: ViewProjectComponent
      }
    ]
  }, 
  {
    path: 'help',
    component: HelpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
