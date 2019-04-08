import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = []
  tableHeaders = ["s.no", "name", "price", "manufacture", "owner"]



  // users = [{
  //   firstName: 'mohana priya',
  //   lastName: 'manogar',
  //   email: 'monapriya@gmail.com',
  //   phone: '5627389567',
  //   destignation: 'trainee',
  //   status: 'active'
  // },
  // {
  //   firstName: ' priya',
  //   lastName: 'chitti',
  //   email: 'priya@gmail.com',
  //   phone: '98407389567',
  //   destignation: 'trainee',
  //   status: 'inactive'
  // },
  // {
  //   firstName: 'maneesha',
  //   lastName: 'akula',
  //   email: 'maneeshaakula@gmail.com',
  //   phone: '89347389567',
  //   destignation: 'trainee',
  //   status: 'active'
  // },
  // {
  //   firstName: 'shruthi',
  //   lastName: 'muthu',
  //   email: 'shruthimuthu@gmail.com',
  //   phone: '9566191914',
  //   destignation: 'trainee',
  //   status: 'inactive'
  // },
  // {
  //   firstName: 'subha',
  //   lastName: 'vellapandi',
  //   email: 'subhavellapandi@gmail.com',
  //   phone: '8927389567',
  //   destignation: 'trainee',
  //   status: 'active'
  // },
  // {
  //   firstName: 'pradeep',
  //   lastName: 'kumar',
  //   email: 'pradeepkumar@gmail.com',
  //   phone: '9127389567',
  //   destignation: 'trainee',
  //   status: 'inactive'
  // },
  // {
  //   firstName: 'sukumar',
  //   lastName: 'kuchana',
  //   email: 'sukumar@gmail.com',
  //   phone: '8127389567',
  //   destignation: 'trainee',
  //   status: 'active'
  // },
  // {
  //   firstName: 'venkat',
  //   lastName: 'puttamcheeti',
  //   email: 'venkat@gmail.com',
  //   phone: '9127389567',
  //   destignation: 'trainee',
  //   status: 'active'
  // },
  // {
  //   firstName: 'jyothi',
  //   lastName: 'saikam',
  //   email: 'jyoyhisaikam@gmail.com',
  //   phone: '9117389567',
  //   destignation: 'trainee',
  //   status: 'inactive'
  // },
  // {
  //   firstName: 'cinni',
  //   lastName: 'thomas',
  //   email: 'cinnithomas@gmail.com',
  //   phone: '8127389567',
  //   destignation: 'trainee',
  //   status: 'active'
  // },
  // {
  //   firstName: 'arun',
  //   lastName: 'kumar',
  //   email: 'arunkumar@gmail.com',
  //   phone: '8127389567',
  //   destignation: 'trainee',
  //   status: 'inactive'
  // },
  // {
  //   firstName: 'sanjay',
  //   lastName: 'hari',
  //   email: 'sanjayhari@gmail.com',
  //   phone: '8127389567',
  //   destignation: 'trainee',
  //   status: 'active'
  // }
  // ]
  // tableHeaders = ["s.no", "first", "last", "email", "phone", "designation", "status"]
  // usersService: any;

  constructor(private router: Router, private usersService: UsersService) { }

  async ngOnInit() {

    const users = await this.usersService.getUsers()
    this.users = users['users']
    console.log("hello");
  }



  // ngOnInit() {

  // }
  navigateToUser(id) {
    console.log(id);
    this.router.navigate([`users/${id}`]);
  }
  getActiveCount() {
    let count: number = 0;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].status == "active") {
        count++;
      }
    }
    return count;
  }
  getInactiveCount() {
    let count: number = 0;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].status == "inactive") {
        count++;
      }
    }
    return count;
  }





}
