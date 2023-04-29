import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentsHandelingService } from 'src/app/Services/students-handeling.service';
import { Router } from '@angular/router';
import { UniqueIdValidator } from 'src/app/validators/UniqueIdValidator ';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registrationForm: FormGroup;
  @ViewChild('successMessage', { static: true }) successMessage!: ElementRef;
  constructor(private myService: StudentsHandelingService, private router: Router, private uniqueIdValidator: UniqueIdValidator) {
  this.registrationForm = new FormGroup({
    id: new FormControl('', {validators: [Validators.required,Validators.min(1),],asyncValidators: [this.uniqueIdValidator.validateUniqueId()]}),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [ Validators.required,Validators.min(20),Validators.max(40),]),
    phone: new FormControl('', [Validators.required,Validators.minLength(11),Validators.maxLength(11),]),
    address: new FormControl(''),
  });
  }
  onSubmit() {
    if (this.registrationForm.valid) {
      const newStudent = this.registrationForm.value;
      this.myService.AddStudent(newStudent).subscribe(
        {
          next: () => {
            console.log('Student added successfully');
            this.router.navigate(['/students']);
          },
          error: (err) => {
            console.log('Error adding student:', err);
          }
        }
      );
      this.registrationForm.reset();
      this.successMessage.nativeElement.style.display = 'block';
      setTimeout(() => {
        this.successMessage.nativeElement.style.display = 'none';
      }, 3000);
    }
  }
}
