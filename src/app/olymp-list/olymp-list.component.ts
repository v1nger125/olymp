import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-olymp-list',
  templateUrl: './olymp-list.component.html',
  styleUrls: ['./olymp-list.component.css']
})
export class OlympListComponent implements OnInit {

  lessonFilter = new FormControl('');
  cityFilter = new FormControl('');
  dynamicStyle: string[];
  sign = 'Ученик'
  mainList = true

  olymps;

  constructor(private requester: RequestService) { }

  ngOnInit() {
    const subsUser = this.requester.getUser().subscribe(data => {
      subsUser.unsubscribe();
      this.sign = data['role'] == 'ROLE_CHILD' ? "Ученик" : data['role'] == 'ROLE_TEACHER' ? 'Учитель' : 'Администратор';
    })
    const subs = this.requester.getOlymps().subscribe(data => {
      this.olymps = data;
      subs.unsubscribe();
      this.dynamicStyle = new Array(this.olymps.length).fill("");
    });
  }

  toggleStyle(index){
    if(this.dynamicStyle[index] == ''){
      this.dynamicStyle[index] = 'size_helper';
    }
    else{
      this.dynamicStyle[index] = '';
    }
  }

  addToMe(userId){
    const subs = this.requester.addOlympToUser(userId).subscribe(()=>{
      subs.unsubscribe()
    })
  }
}
