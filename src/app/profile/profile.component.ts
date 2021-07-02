import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  sign = "Ученик"
  email = ''
  profileForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.pattern('[a-zA-ZЁёА-я]*')]],
    lastName: ['', [Validators.required, Validators.pattern('[a-zA-ZЁёА-я]*')]],
    middleName: ['', [Validators.pattern('[a-zA-ZЁёА-я]*')]],
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
      this._updateForm(data)
    })
  }

  onSubmit(){
    let incomingDate = this.profileForm.value["birthday"].split('-')
    const subs = this.requester.updateUser({
      "name": this.profileForm.value["firstName"],
      "surname": this.profileForm.value["lastName"],
      "patronymic": this.profileForm.value["middleName"],
      "school": this.profileForm.value["school"],
      "studyClass": this.profileForm.value["class"],
      "region": this.profileForm.value["region"],
      "city": this.profileForm.value["city"],
      "birthdate": this.profileForm.value["birthday"] ? incomingDate[2]+'.'+incomingDate[1]+'.'+incomingDate[0] : null
    }).subscribe(
      data => {
        subs.unsubscribe()
        this._updateForm(data)
      }
    )
  }

  private _updateForm = (data) => {
    this.profileForm.controls.firstName.setValue(data['name']);
    this.profileForm.controls.lastName.setValue(data['surname']);
    this.profileForm.controls.middleName.setValue(data['patronymic']);
    if(data['birthdate']){
      let commingDate = data['birthdate'].split('.')
      this.profileForm.controls.birthday.setValue(""+commingDate[2]+'-'+commingDate[1]+"-"+(commingDate[0]));
    }
    this.profileForm.controls.school.setValue(data['school']);
    this.profileForm.controls.class.setValue(data['studyClass']);
    this.profileForm.controls.city.setValue(data['city']);
    this.profileForm.controls.region.setValue(data['region']);
    this.email = data['email'];
    this.sign = data['role'] == 'ROLE_CHILD' ? "Ученик" : data['role'] == 'ROLE_TEACHER' ? 'Учитель' : 'Администратор';
  }
}
