import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProjectComponent } from './view-project.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [ViewProjectComponent],
  imports: [
    CommonModule,
    NgbDropdownModule
  ],
  exports: [ViewProjectComponent]
})
export class ViewProjectModule { }
