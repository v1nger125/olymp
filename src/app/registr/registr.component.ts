import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registr',
  templateUrl: './registr.component.html',
  styleUrls: ['./registr.component.css']
})
export class RegistrComponent implements OnInit {

  signs = ["Ученик", "Учитель"]

  registrForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.pattern('[a-zA-ZЁёА-я]*')]],
    lastName: ['', [Validators.required, Validators.pattern('[a-zA-ZЁёА-я]*')]],
    middleName: ['', [Validators.pattern('[a-zA-ZЁёА-я]*')]],
    sign: this.signs[0],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
  }


  onSubmit(): void{
    if(this.registrForm.valid){
      const subs = this.authService.registr({
        "email" : this.registrForm.value['email'],
        "name" : this.registrForm.value['firstName'],
        "surname" : this.registrForm.value['lastName'],
        "patronymic" : this.registrForm.value['middleName'],
        "role" : this.registrForm.value['sign'] == this.signs[0] ? "ROLE_CHILD" : "ROLE_TEACHER",
        "password":  this.registrForm.value['password'],
        "confirmPassword" : this.registrForm.value['password']
      }).subscribe({
        next: () => {
          subs.unsubscribe();
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error(err);
        }
      })
    }
  }

}
