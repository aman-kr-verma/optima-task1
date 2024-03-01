import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  formData: any = null;
  formSubmissions: any[] = [];
  constructor() { }

  ngOnInit(): void {
    // receiving and storing data in local variable
    this.formData = JSON.parse(localStorage.getItem('formData') || '{}');
    const storedData = localStorage.getItem('formSubmissions');
    if (storedData) {
      this.formSubmissions = JSON.parse(storedData);
    }
  }

}
