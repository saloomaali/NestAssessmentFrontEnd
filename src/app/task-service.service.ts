import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private http: HttpClient) { }
  viewTasks = () => { return this.http.get(environment.viewTasksUrl) }
  updateComment = (id: any, data: any) => { return this.http.put(environment.updateComment + id, data) }
}
