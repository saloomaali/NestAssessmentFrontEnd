import { Component} from '@angular/core';
import { TaskServiceService } from '../task-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-my-task-component',
  templateUrl: './my-task-component.component.html',
  styleUrls: ['./my-task-component.component.css']
})
export class MyTaskComponentComponent {
  [x: string]: any;
  tasks: any = [];
  id = "";
  p: number = 1;
  total: number = 0;
  comment = "";
  pageChangeEvent(event: number) {
    this.p = event;
  }
  constructor(private api: TaskServiceService, private router: Router) {
    this.api.viewTasks().subscribe(
      (response) => {
        this.tasks = response;
      },
      error => {
        this.handleError(error.message + "with status code" + error.status);
      }
    )
  }
  handleError(error: any) {
    localStorage.setItem("errorMsg", error);
    this.router.navigateByUrl("/error")
  }
  onEnter(event: any) {
    this.comment = event.target.value;
    let data: any = { "comment": this.comment };
    this.api.updateComment(this.id, data).subscribe(
      (response: any) => {
        alert(response.msg);
        window.location.reload();
      },
      error => {
        this.handleError(error.message + "with status code" + error.status);
      }
    )
  }
  getId(id: any) {
    this.id = id;
  }
}
