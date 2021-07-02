import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  date = new Date()
  month = new FormControl('');
  days;
  olymps;

  constructor(private requester: RequestService) { }

  ngOnInit() {
    const subs = this.requester.getCalendar().subscribe(data => {
      this.olymps = data;
      subs.unsubscribe()
      this.month.setValue(this.date.getFullYear() + '-' + (("0" + (this.date.getMonth() + 1)).slice(-2)))
      this.changeMonth()
    })
  }

  changeMonth(){
    this.date = new Date(this.month.value)
    this.days = [...Array(new Date(this.date.getFullYear(),this.date.getMonth()+1,0).getDate()).keys()]
    this.days = this.days.map((value) => {return {"day": value+1, "event":''}})
    const selectedDate = this.month.value.split('-')
    this.olymps.forEach(element => {
      const comingDate = element["dateOlympiad"].split('.')
      this.days[parseInt(comingDate[0])-1].event = comingDate[2] == selectedDate[0] && comingDate[1] == selectedDate[1] ? element["olympiadTitle"] : ""
    });
  }

}
