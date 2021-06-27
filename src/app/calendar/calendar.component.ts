import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  date = new Date()

  days = []
  constructor() { }

  ngOnInit() {
    this.days = [...Array(new Date(this.date.getFullYear(),this.date.getMonth()+1,0).getDate()).keys()].map(_ => _+1)
  }

}
