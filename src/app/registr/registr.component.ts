import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(): void{
    if(this.registrForm.valid){
      this.router.navigate(['/login']);
    }
  }

}
