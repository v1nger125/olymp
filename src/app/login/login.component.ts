import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    login: '',
    password: ''
  })

  constructor(private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(): void{

    console.warn(this.loginForm.value);
    this.router.navigate(['/list']);
  }

}
