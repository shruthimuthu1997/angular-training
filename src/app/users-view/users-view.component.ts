import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import *as formatNumber from 'simple-format-number'
@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css']
})
export class UsersViewComponent implements OnInit {
  id: number;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = parseInt[`id`];
    })
  }

  ngOnInit() {
  }
  getId() {
    return formatNumber(this.id);
  }

}
