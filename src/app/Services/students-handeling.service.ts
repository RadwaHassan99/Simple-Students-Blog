import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsHandelingService {

  constructor(private readonly myClient:HttpClient) {}
  private readonly Base_URL = "http://localhost:3000/students";
  GetAllStudents(){
    return this.myClient.get(this.Base_URL);
  }

  GetStudentByID(id:any){
    return this.myClient.get(this.Base_URL+"/"+id);
  }

  AddStudent(data: any) {
    return this.myClient.post(this.Base_URL, data);
  }
  DeleteStudent(id: any) {
    return this.myClient.delete(this.Base_URL + '/' + id);
  }

  UpdateStudent(id: any, data: any) {
    return this.myClient.put(this.Base_URL + '/' + id, data);
  }
}
