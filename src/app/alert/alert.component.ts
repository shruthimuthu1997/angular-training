import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() success;
  @Input() message;

  constructor() { }

  ngOnInit() {
  }
  isValid() {
    return this.success;
  }
  isDefined() {
    return this.success !== undefined
  }
}
