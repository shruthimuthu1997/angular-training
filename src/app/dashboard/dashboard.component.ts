import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {



  // users = [{
  //   firstName: 'mohana priya',
  //   lastName: 'manogar',
  //   email: 'monapriya@gmail.com',
  //   phone: '5627389567',
  //   destignation: 'trainee'
  // },
  // {
  //   firstName: ' priya',
  //   lastName: 'chitti',
  //   email: 'priya@gmail.com',
  //   phone: '98407389567',
  //   destignation: 'trainee'
  // },
  // {
  //   firstName: 'maneesha',
  //   lastName: 'akula',
  //   email: 'maneeshaakula@gmail.com',
  //   phone: '89347389567',
  //   destignation: 'trainee'
  // },
  // {
  //   firstName: 'shruthi',
  //   lastName: 'muthu',
  //   email: 'shruthimuthu@gmail.com',
  //   phone: '9566191914',
  //   destignation: 'trainee'
  // },
  // {
  //   firstName: 'subha',
  //   lastName: 'vellapandi',
  //   email: 'subhavellapandi@gmail.com',
  //   phone: '8927389567',
  //   destignation: 'trainee'
  // },
  // {
  //   firstName: 'pradeep',
  //   lastName: 'kumar',
  //   email: 'pradeepkumar@gmail.com',
  //   phone: '9127389567',
  //   destignation: 'trainee'
  // },
  // {
  //   firstName: 'sukumar',
  //   lastName: 'kuchana',
  //   email: 'sukumar@gmail.com',
  //   phone: '8127389567',
  //   destignation: 'trainee'
  // },
  // {
  //   firstName: 'venkat',
  //   lastName: 'puttamcheeti',
  //   email: 'venkat@gmail.com',
  //   phone: '9127389567',
  //   destignation: 'trainee'
  // },
  // {
  //   firstName: 'jyothi',
  //   lastName: 'saikam',
  //   email: 'jyoyhisaikam@gmail.com',
  //   phone: '9117389567',
  //   destignation: 'trainee'
  // },
  // {
  //   firstName: 'cinni',
  //   lastName: 'thomas',
  //   email: 'cinnithomas@gmail.com',
  //   phone: '8127389567',
  //   destignation: 'trainee'
  // }
  // ]

  product = [{
    model: "lava fuel",
    company: "lava",
    manufacture: "china",
    price: "4000"
  },
  {
    model: "samsung s5",
    company: "samsung",
    manufacture: "china",
    price: "14000"
  },
  {
    model: "vivo v5",
    company: "vivo",
    manufacture: "china",
    price: "17000"
  }

  ]

  tableHeaders = ["s.no", "first", "last", "email", "phone", "designation"]

  constructor() { }

  ngOnInit() {
  }
}