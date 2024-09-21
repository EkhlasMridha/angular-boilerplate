import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CoreService } from 'utility-services/core.service';
import { FormsMaterialModule } from '@shared/forms-material.module';
import { SharedMaterialModule } from '@shared/shared-material.module';
import { ModalTemplateComponent } from '../../shared/modal-template/modal-template.component';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [
    ModalTemplateComponent,
    FormsMaterialModule,
    SharedMaterialModule,
    CommonModule,
  ],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss',
})
export class ChangePasswordComponent {
  changePassForm!: FormGroup;
  errorObservers$: any = {
    currentpassword: '',
    password: '',
    confirmPassword: '',
  };
  constructor(
    private dialogref: MatDialogRef<ChangePasswordComponent>,
    private fb: FormBuilder,
    private coreService: CoreService
  ) {}

  ngOnInit(): void {
    this.changePassForm = this.createForm();
    this.coreService.formService.handleFormError(
      this.changePassForm,
      this.errorObservers$,
      this.errorMessageHandler
    );
    this.changePassForm.controls['confirmPassword'].disable();
  }

  createForm() {
    return this.fb.group(
      {
        currentpassword: ['', Validators.required],
        password: [
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/),
          ]),
        ],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: [this.passwordMustMatch, this.shoudDisable],
      }
    );
  }

  shoudDisable(control: AbstractControl) {
    const firstControl = control.get('password');
    const secondControl = control.get('confirmPassword');

    firstControl?.valueChanges.subscribe((res) => {
      if (res.length < 6 || firstControl.errors) {
        secondControl?.disable({ emitEvent: false, onlySelf: true });
      } else {
        secondControl?.enable({ emitEvent: false, onlySelf: true });
      }
    });

    return null;
  }

  passwordMustMatch(control: AbstractControl): ValidationErrors | null {
    const firstControl = control.get('password');
    const secondControl = control.get('confirmPassword');

    if (firstControl?.value !== secondControl?.value) {
      secondControl?.setErrors({ mustMatch: true });
      return { mustMatch: true };
    }
    if (secondControl?.hasError('mustMatch')) {
      secondControl?.setErrors({ ...secondControl.errors, mustMatch: false });
    }

    return null;
  }

  errorMessageHandler(name: string, owner: string) {
    console.log(name, owner);
    switch (owner) {
      case 'password':
        if (name == 'required') {
          return 'Password is required';
        } else {
          return 'Must contain 1 uppercase and 1 lowercase letter, number and minimum length 8';
        }
      case 'currentpassword':
        return 'Current password is required';
      case 'confirmPassword':
        if (name == 'required') {
          return 'Confirm password is required';
        } else {
          return 'Password must be same';
        }
      default:
        return 'Invalid input';
    }
  }

  closeModal() {
    this.dialogref.close();
  }

  onSubmit() {
    if (!this.changePassForm.valid) {
      this.coreService.checkFormStatus(this.changePassForm);
      return;
    }

    const formData = { ...this.changePassForm.value };

    delete formData.confirmPassword;
  }
}
