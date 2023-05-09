import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private http: HttpClient) { }
  viewTasks = () => { return this.http.get("http://localhost:8081/mytask/view") }
  updateComment = (id: any, data: any) => { return this.http.put("http://localhost:8081/mytask/update/" + id, data) }
}
