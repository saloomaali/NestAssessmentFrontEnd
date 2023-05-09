import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MyTaskComponentComponent } from './my-task-component.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TaskServiceService } from '../task-service.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('MyTaskComponentComponent', () => {
  let component: MyTaskComponentComponent;
  let fixture: ComponentFixture<MyTaskComponentComponent>;
  let httpMock: HttpTestingController;
  let service: TaskServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NgxPaginationModule, RouterTestingModule],
      declarations: [MyTaskComponentComponent],
      providers: [TaskServiceService]
    })
      .compileComponents();
    fixture = TestBed.createComponent(MyTaskComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(TaskServiceService);

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
  it('should set tasks property after a successful API call', () => {
    const expectedTasks = [
      { id: 1, name: 'Task 1' },
      { id: 2, name: 'Task 2' },
    ];
    const url = 'http://localhost:8081/mytask/view';
    service.viewTasks().subscribe((request) => {
      expect(component.tasks).toEqual(expectedTasks);
      httpMock.expectOne(url)
      expect(request).toEqual('GET');
    });
  });
  // it('should handle errors', () => {
  //   const errorMsg = 'Error message';
  //   const status = 500;

  //   spyOn(localStorage, 'setItem');
  //   spyOn(component.router, 'navigateByUrl');

  //   component.handleError({
  //     message: errorMsg,
  //     status: status
  //   });

  //   expect(localStorage.setItem).toHaveBeenCalledWith('errorMsg', `${errorMsg} with status code ${status}`);
  //   expect(component.router.navigateByUrl).toHaveBeenCalledWith('/error');
  // });
});
