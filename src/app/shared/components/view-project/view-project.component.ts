import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  number: number,
  name: string,
  status: string,
  customer: string,
  startDate: string
}

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.scss']
})
export class ViewProjectComponent {
  tableData: Array<Project> = [
    {
      number: 3116,
      name: 'SOMED-SPITEX MAINT',
      status: 'Finished',
      customer: 'MGB Tourism',
      startDate: this.convertDate('2006/04/29')
    },
    {
      number: 3117,
      name: 'GKBWEB',
      status: 'New',
      customer: 'GKB',
      startDate: this.convertDate('2015/05/10')
    },
  ];

  convertDate(date: string): string {
    const myDate = new Date(date);
    const datePipe = new DatePipe('en-US');
    const formattedDate = datePipe.transform(myDate, 'dd.MM.yyyy') ?? '';

    return formattedDate;
  }
}
