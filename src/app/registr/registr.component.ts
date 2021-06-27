import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registr',
  templateUrl: './registr.component.html',
  styleUrls: ['./registr.component.css']
})
export class RegistrComponent implements OnInit {

  registrForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    middleName: '',
    sign: '',
    birthday: '',
    region: '',
    city: '',
    school: '',
    class: '',
    lesson: '',
    phone: '',
    email: '',
    password: ''
  })

  constructor(private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(): void{
    console.warn(this.registrForm.value);
    this.router.navigate(['/login']);
  }

}
