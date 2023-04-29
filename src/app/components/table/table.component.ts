import { Component ,OnInit } from '@angular/core';
import { StudentsHandelingService } from 'src/app/Services/students-handeling.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  students:any;
  studentToDeleteId:any;
  page: number = 1;

  constructor(private StudentsHandelingService: StudentsHandelingService) { }

  ngOnInit(): void {
    this.StudentsHandelingService.GetAllStudents().subscribe(
      {
        next: (data) => {
          console.log(data);
          this.students = data;
        },
        error: (err) => {
          console.log(err);
        }
      }
    )
  }
  onDelete(studentId: any) {
    this.studentToDeleteId = studentId;
  }

  onDeleteConfirmed() {
    this.StudentsHandelingService.DeleteStudent(this.studentToDeleteId).subscribe(()=> {
      this.students = this.students.filter((s: any) => s.id !== this.studentToDeleteId);
    });
  }

}
