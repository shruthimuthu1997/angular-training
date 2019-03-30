import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  @Input() price: number = 0;
  @Input() heading: string = '';
  @Input() iconClass = "";
  @Input() color = "black";

  constructor() { }

  ngOnInit() {
  }
  getStyle() {
    return {
      'font-size': '50px',
      'color': this.color
    }
  }

}
