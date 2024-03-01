import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;
      let existingFormData = null;

      existingFormData = localStorage.getItem('formSubmissions');

      existingFormData = existingFormData ? JSON.parse(existingFormData) : [];

      existingFormData.push(formData);

      localStorage.setItem('formSubmissions', JSON.stringify(existingFormData));

      alert("User Added!!");
      this.form.reset();
    }
  }

  get errors(): any {
    return this.form.controls;
  }

}
