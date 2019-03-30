import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  success;
  text;
  constructor(private router: Router, private authService: AuthService) {

  }

  ngOnInit() {
  }
  // login() {
  //   if ((this.username === "admin") && (this.password === "admin@123")) {
  //     // console.log("Authorized");
  //     this.success = true;
  //     this.text = "Login Successful";
  //     this.router.navigate(["dashboard"]);

  //   }
  //   else {
  //     // console.log("Invalid credentials");
  //     this.success = false;
  //     this.text = "Invalid Credentials";
  //   }
  // console.log(this.success);
  // }

  // console.log(this.username, " ", this.password);


  async login() {
    const isValid: Boolean = await this.authService.login('admin', 'admin@123')
    if (isValid) this.router.navigate(['users'])
  }
}

