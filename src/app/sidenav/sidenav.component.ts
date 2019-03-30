import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Input() iconClass = "";
  @Input() color = "black";

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onclick() {
    this.router.navigate(["dashboard"]);
  }
  onclick1() {
    this.router.navigate(["users"]);
  }
  onclick2() {
    this.router.navigate(["products"]);
  }
  onclick3() {
    this.router.navigate(["shop"]);
  }
  onclick4() {
    this.router.navigate(["login"]);
  }

}
