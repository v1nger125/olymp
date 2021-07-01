import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  signs = ["Ученик", "Учитель"]

  profileForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.pattern('[a-zA-ZЁёА-я]*')]],
    lastName: ['', [Validators.required, Validators.pattern('[a-zA-ZЁёА-я]*')]],
    middleName: ['', [Validators.pattern('[a-zA-ZЁёА-я]*')]],
    sign: this.signs[0],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    birthday: ['', [Validators.required]],
    region: '',
    city: '',
    school: '',
    class: '',
    phone: '',
  })


  constructor(private formBuilder: FormBuilder,
              private requester: RequestService) { }

  ngOnInit() {
    const subs = this.requester.getUser().subscribe(data => {
      subs.unsubscribe()
      this.profileForm.controls.firstName.setValue(data['firstName'])
      this.profileForm.controls.lastName.setValue(data['lastName'])
      this.profileForm.controls.middleName.setValue(data['middleName'])
      this.profileForm.controls.sign.setValue(data['sign'])
      this.profileForm.controls.email.setValue(data['email'])
      this.profileForm.controls.password.setValue(data['password'])
      this.profileForm.controls.birthday.setValue(data['birthday'])
      this.profileForm.controls.region.setValue(data['region'])
      this.profileForm.controls.city.setValue(data['city'])
      this.profileForm.controls.school.setValue(data['school'])
      this.profileForm.controls.class.setValue(data['class'])
      this.profileForm.controls.phone.setValue(data['phone'])

    })
  }

  onSubmit(){
  }
}
