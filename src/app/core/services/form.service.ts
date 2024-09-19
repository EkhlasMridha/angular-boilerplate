import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor() {}

  handleFormError(
    formGorup: FormGroup,
    errorObservers: Record<string, Observable<any>>,
    errorTypeGenerator: (type: string, owner: string) => any
  ) {
    console.log(formGorup.controls);
    Object.keys(formGorup.controls).forEach((field) => {
      errorObservers[field] = formGorup.controls[field].statusChanges.pipe(
        filter((status) => status === 'INVALID'),
        map(() => {
          console.log(formGorup.controls[field]);
          if (!formGorup.controls[field].errors) {
            return null;
          }
          for (let errName in formGorup.controls[field].errors) {
            console.log(errName);

            let errorType = errorTypeGenerator(errName, field.toString());
            return errorType;
          }
        })
      );
    });
  }

  checkFormStatus(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      formGroup.controls[field].updateValueAndValidity();
    });
  }
}
