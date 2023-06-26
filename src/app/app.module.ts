import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './shared/layout/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderModule } from './shared/layout/header/header.module';
import { HomeModule } from './pages/home/home.module';
import { CreateProjectFormComponent } from './shared/components/create-project-form/create-project-form.component';
import { ViewProjectComponent } from './shared/components/view-project/view-project.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HeaderModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
