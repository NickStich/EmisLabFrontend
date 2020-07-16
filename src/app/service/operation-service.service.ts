import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Operation } from '../model/operation';
import { Observable } from 'rxjs';

@Injectable()
export class OperationServiceService {

  private operationsUrl: string;

  constructor(private http: HttpClient) {
    this.operationsUrl = 'http://localhost:8080/dentalJobs/operations';
  }

  public findAll(): Observable<Operation[]> {
    return this.http.get<Operation[]>(this.operationsUrl);
  }

  public save(operation: Operation) {
    return this.http.post<Operation>(this.operationsUrl, operation);
  }
}
