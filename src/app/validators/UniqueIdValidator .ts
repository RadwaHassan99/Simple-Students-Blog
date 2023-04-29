import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { StudentsHandelingService } from 'src/app/Services/students-handeling.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UniqueIdValidator {

  constructor(private myService: StudentsHandelingService) { }

  validateUniqueId(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const id = control.value;
      return this.myService.GetStudentByID(id).pipe(
        map((student) => {
          // If student exists, id is not unique
          return student ? { alreadyExists: true } : null;
        }),
        catchError(() => of(null)) // Return null if HTTP error occurs
      );
    };
  }
}
