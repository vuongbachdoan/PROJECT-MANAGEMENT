import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-create-project-form',
  templateUrl: './create-project-form.component.html',
  styleUrls: ['./create-project-form.component.scss']
})
export class CreateProjectFormComponent {
  projectNumberError: string = '';
  projectNameError: string = '';
  customerError: string = '';
  groupError: string = '';
  membersError: string = '';
  statusError: string = '';
  startDateError: string = '';
  endDateError: string = '';

  private _success = new Subject<string>();

  staticAlertClosed = false;
  successMessage = '';
  @ViewChild('selfClosingAlert', { static: false })
  selfClosingAlert!: NgbAlert;

  ngOnInit(): void {
		this._success.subscribe((message) => (this.successMessage = message));
    this._success.pipe(debounceTime(5000)).subscribe(() => {
			if (this.selfClosingAlert) {
				this.selfClosingAlert.close();
			}
		});
  }

  public changeSuccessMessage(event: Event) {
    event.preventDefault();
    this._success.next(`Please enter all the mandatories fields (*)`);
  }
}
