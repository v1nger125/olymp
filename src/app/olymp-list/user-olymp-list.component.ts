import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-olymp-list',
  templateUrl: './olymp-list.component.html',
  styleUrls: ['./olymp-list.component.css']
})
export class UserOlympListComponent implements OnInit {

  lessonFilter = new FormControl('');
  cityFilter = new FormControl('');
  dynamicStyle: string[];

  olymps = []
  constructor(private requester: RequestService) { }

  ngOnInit() {
    const subs = this.requester.getOlymps().subscribe(data => {
      this.olymps = data;
      subs.unsubscribe();
      this.dynamicStyle = new Array(this.olymps.length).fill("")
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
}
