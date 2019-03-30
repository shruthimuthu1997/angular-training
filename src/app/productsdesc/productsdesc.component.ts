import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-productsdesc',
  templateUrl: './productsdesc.component.html',
  styleUrls: ['./productsdesc.component.css']
})
export class ProductsdescComponent implements OnInit {

  @Input() color = "";
  @Input() desc = "";
  @Input() image = "";
  @Input() code: any;
  @Input() price: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
