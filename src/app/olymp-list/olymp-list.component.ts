import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-olymp-list',
  templateUrl: './olymp-list.component.html',
  styleUrls: ['./olymp-list.component.css']
})
export class OlympListComponent implements OnInit {

  olymps = []
  constructor(private requester: RequestService) { }

  ngOnInit() {
    this.requester.getOlymps().subscribe(data => this.olymps = data)
  }

}
