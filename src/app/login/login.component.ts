import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorStatus: boolean = false;

  loginForm = this.formBuilder.group({
    login: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private auth: AuthService) { }

  ngOnInit() {
  }

  onSubmit(): void{
    if(this.loginForm.valid){
      this.router.navigate(['/list']);
      const val = this.loginForm.value;
      const subs = this.auth.login(val.login, val.password).subscribe({
        next: (resp) => {
          localStorage.setItem('token', resp['token']);
          subs.unsubscribe();
          this.router.navigate(['/list']);
        },
        error: (err) => {
          this.errorStatus = true;
          console.error(err);
        }
      })
    }
    else{
      this.errorStatus = true;
    }
  }

}
