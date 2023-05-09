import { TestBed } from '@angular/core/testing';
import { TaskServiceService } from './task-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
describe('TaskServiceService', () => {
  let service: TaskServiceService;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [TaskServiceService]
    });
    service = TestBed.inject(TaskServiceService);
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should update a comment', () => {
    const id = 123;
    const data = { text: 'updated text' };
    const url = `http://localhost:8081/mytask/update/${id}`;
    const expectedResponse = { success: true };

    service.updateComment(id, data).subscribe(response => {
      expect(response).toEqual(expectedResponse);
    });

    const req = httpMock.expectOne(url);
    expect(req.request.method).toEqual('PUT');
    expect(req.request.body).toEqual(data);
    req.flush(expectedResponse);
  });
});
