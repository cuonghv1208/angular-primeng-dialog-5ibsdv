import { Component, ViewChild, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { DynamicdialogComponent } from './dynamicdialog/dynamicdialog.component';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ConfirmationService],
})
export class AppComponent {
  name = 'Angular';
  dlgref: any;
  @ViewChild('cd') cd;
  data: any[];
  display = false;
  constructor(private confirmationService: ConfirmationService) {}
  confirm() {
    // const config: DynamicdialogConfig();
    // config.header = 'haha';
    this.display = true;
    // this.dlgref = this.confirmationService.confirm({
    //     message:
    //       `<p>Are you sure that you want to perform this action?</p>
    //       <table *ngFor="let row in data">
    //         <tr>
    //         <td>{{row.name}}
    //       </table>`,
    //     accept: () => {
    //         //Actual logic to perform a confirmation
    //     }
    // });
  }
  onAccept() {
    let update = (idx) => {
      console.log('timer');
      this.data[idx].done = true;
    };
    setTimeout(function () {
      update(0);
    }, 1000);
    setTimeout(function () {
      update(1);
    }, 2000);
    setTimeout(function () {
      update(2);
    }, 3000);
    // this.display = false
  }

  ngOnInit() {
    this.data = [
      { name: 'item1', done: false },
      { name: 'item2', done: false },
      { name: 'item3', done: false },
    ];
  }
}
