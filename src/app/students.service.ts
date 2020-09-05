import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student, Login } from '../table-list';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http : HttpClient) { }
  // login():Observable<Login[]>{
  //   return this.http.get<Login[]>('http://localhost:3001/school/users');
  // }
  public studentData: BehaviorSubject<Student[]> = new BehaviorSubject<Student[]>(null);
  serviceRecordProvider$ = this.studentData.asObservable();
  
  public studentId: BehaviorSubject<Number> = new BehaviorSubject<Number>(null);
  StudentIdRecord$ = this.studentId.asObservable();
  
  getStudentId(Id) {
    this.studentId.next(Id);
  }

  getStudentDetails(student) {
    this.studentData.next(student);
  }
  LoginPostRequest(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3001/login', data);  
  }
  signUpPostRequest(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3001/addUser', data);  
  }
  editDetailsPostRequest(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3001/student-details', data);  
  }
forgetPasswordPutRequest(data: any): Observable<any> {
  return this.http.put<any>('http://localhost:3001/changePassword', data);  
}
  getDetails(): Observable<Student[]>{
    return this.http.get<Student[]>('http://localhost:3001/school/student-details');
  }
  getStudentData(data): Observable<any>{
    return this.http.get<any>('http://localhost:3001/school/student-details',{params : { id: data}});
  }
}
