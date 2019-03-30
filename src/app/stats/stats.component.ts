import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  @Input() count = 0;
  @Input() title = "";
  @Input() iconClass = "";
  @Input() color = "black";
  constructor() { }

  ngOnInit() {
  }

  getStyle() {
    return {
      'font-size': '56px',
      'color': this.color
    }
  }
}
