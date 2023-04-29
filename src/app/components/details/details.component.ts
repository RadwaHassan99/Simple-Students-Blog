import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { StudentsHandelingService } from 'src/app/Services/students-handeling.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  ID:any;
  student: any;
  constructor(myRoute:ActivatedRoute,public StudentsHandelingService: StudentsHandelingService){
    this.ID = myRoute.snapshot.params["id"];
  }
  ngOnInit(): void {
    this.StudentsHandelingService.GetStudentByID(this.ID).subscribe(
      {
        next: (data) => {
          this.student = data;
        },
        error:(err)=>{console.log(err)}
      }
    );
  }
}
