import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CreateProjectFormModule } from 'src/app/shared/components/create-project-form/create-project-form.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    CreateProjectFormModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
