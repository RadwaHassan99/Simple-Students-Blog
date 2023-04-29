import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentsHandelingService } from 'src/app/Services/students-handeling.service';
import { Router } from '@angular/router';
import { UniqueIdValidator } from 'src/app/validators/UniqueIdValidator ';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  ID: any;
  student: any;
  updatingForm: FormGroup;
  @ViewChild('successMessage', { static: true }) successMessage!: ElementRef;
  constructor(private myRoute: ActivatedRoute, private StudentsHandelingService: StudentsHandelingService, private router: Router, private uniqueIdValidator: UniqueIdValidator) {
    this.ID = myRoute.snapshot.params["id"];
    this.updatingForm = new FormGroup({
      id: new FormControl('', [Validators.required,Validators.min(1)]),
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      age: new FormControl('', [Validators.required, Validators.min(20), Validators.max(40),]),
      phone: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11),]),
      address: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.StudentsHandelingService.GetStudentByID(this.ID).subscribe(
      {
        next: (data) => {
          this.student = data;
          console.log(this.updatingForm);
          this.updatingForm.setValue({
            name: this.student.name,
            id: this.student.id,
            age: this.student.age,
            email: this.student.email,
            phone: this.student.phone,
            address: this.student.address
          });
        },
        error: (err) => { console.log(err) }
      }
    );
  }


  onSubmit() {
    if (this.updatingForm.valid) {
      const updatedStudent = this.updatingForm.value;
      this.StudentsHandelingService.UpdateStudent(this.ID, updatedStudent).subscribe(
        {
          next: () => {
            console.log('Student updated successfully');
            this.router.navigate(['/students']);
          },
          error: (err) => {
            console.log('Error updating student:', err);
          }
        }
      );
      this.updatingForm.reset();
      this.successMessage.nativeElement.style.display = 'block';
      setTimeout(() => {
        this.successMessage.nativeElement.style.display = 'none';
      }, 3000);
    }
  }
}
