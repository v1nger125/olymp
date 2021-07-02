import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-add-olymp',
  templateUrl: './add-olymp.component.html',
  styleUrls: ['./add-olymp.component.css']
})
export class AddOlympComponent implements OnInit {

  addForm = this.formBuilder.group({
    title: ['', [Validators.required]],
    caption: ['', [Validators.required]],
    location: ['', [Validators.required]],
    lesson: ['', [Validators.required]],
    link: ['', [Validators.required]],
    dateOfOlympiads: ['', [Validators.required]]
  })

  constructor(private formBuilder: FormBuilder,
              private requester: RequestService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.addForm.valid){
      let values = this.addForm.value
      let incomingDate = values["dateOfOlympiads"].split('-')
      values["dateOfOlympiads"] = values["dateOfOlympiads"] ? incomingDate[2]+'.'+incomingDate[1]+'.'+incomingDate[0] : null
      const subs = this.requester.addOlymp(values).subscribe({
        next: () => {
          subs.unsubscribe();
          this.router.navigate(['/list']);
        },
        error: (err) => {
          console.error(err);
        }
      })
    }
  }

}
