import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  @Input() data = []

  @Input() tableHeaders = [];
  constructor() { }

  ngOnInit() {
  }
  getKeys() {
    let firstData = this.data[0];
    return Object.keys(firstData);
  }

}
