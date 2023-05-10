import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MyTaskComponentComponent } from './my-task-component.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TaskServiceService } from '../task-service.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { TASKS } from '../mock-data/task';

describe('MyTaskComponentComponent', () => {
  let component: MyTaskComponentComponent;
  let fixture: ComponentFixture<MyTaskComponentComponent>;
  // let httpMock: HttpTestingController;
  let taskService: TaskServiceService;
  let router: Router;



  beforeEach(async () => {
 
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NgxPaginationModule, RouterTestingModule],
      declarations: [MyTaskComponentComponent],
      providers: [TaskServiceService, Router]
    })
      .compileComponents();
    // fixture = TestBed.createComponent(MyTaskComponentComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
    // httpMock = TestBed.inject(HttpTestingController);


  });
  beforeEach(() => {
    fixture = TestBed.createComponent(MyTaskComponentComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    taskService = TestBed.inject(TaskServiceService);
    // spyOn(taskService, 'viewTasks').and.returnValue(of([{ id: 1, title: 'Task 1' }, { id: 2, title: 'Task 2' }])); // spy on the viewTasks method and return a mock observable
    fixture.detectChanges();
   
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should set id', () => {
    component.getId('123');
    expect(component.id).toEqual('123');
  });
  it('should set p', () => {
    component.pageChangeEvent(2);
    expect(component.p).toEqual(2);
  });
  // it('should load tasks on initialization', () => {
  //   expect(component.tasks).toBeTruthy(); // verify that tasks are loaded on component initialization
  // });

  it('should call handleError', () => {
    spyOn(component, 'handleError');
    const mockError = {message: 'HttpErrorResponse', status: "500"};
    spyOn(taskService, 'viewTasks').and.returnValue(throwError(mockError));
    component.viewMyTasks();
    expect(taskService.viewTasks).toHaveBeenCalled();
    expect(component.handleError).toHaveBeenCalledWith('HttpErrorResponsewith status code500');
  });
  it('should call handleError', () => {
    spyOn(component, 'handleError');
    const mockValue = event;
    const mockError = {message: 'HttpErrorResponse', status: "500"};
    spyOn(taskService, 'updateComment').and.returnValue(throwError(mockError));
    component.onEnter(mockValue);
    expect(taskService.updateComment).toHaveBeenCalled();
    expect(component.handleError).toHaveBeenCalledWith('HttpErrorResponsewith status code500');
  });
  it('should store tasks in tasks on initialization',() =>{
    spyOn(taskService, 'viewTasks').and.returnValue(of(TASKS));
    component.viewMyTasks();
    expect(component.tasks).toEqual(TASKS);
  });
  it('should call error page when an error occurs', () => {
    const spy = spyOn(router, 'navigateByUrl');
    component.handleError("HttpErrorResponsewith status code500");
    expect(spy).toHaveBeenCalledWith('/error');
  })
  it('should call viewMyTasks() function after successful update', () => {
    spyOn(window, 'alert');
    const mockResponse = { msg: 'Comment updated successfully.' };
    spyOn(taskService, 'updateComment').and.returnValue(of(mockResponse));
    const viewMyTasksSpy = spyOn(component, 'viewMyTasks');
    component.onEnter({ target: { value: 'New comment' } });
    expect(window.alert).toHaveBeenCalledWith(mockResponse.msg);
    expect(viewMyTasksSpy).toHaveBeenCalled();
  }); 
});
