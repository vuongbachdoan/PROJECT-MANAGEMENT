import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProjectFormComponent } from './create-project-form.component';
import { NgbAlertModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [CreateProjectFormComponent],
  imports: [
    CommonModule,
    NgbDropdownModule,
    NgbAlertModule 
  ],
  exports: [CreateProjectFormComponent]
})
export class CreateProjectFormModule { }
