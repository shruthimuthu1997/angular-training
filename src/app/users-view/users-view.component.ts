import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-userview',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css']
})
export class UserviewComponent {
  usersform: FormGroup;
  submitted: Boolean = false;
  productForm: any;

  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private Userservice: UsersService,
    private router: Router) { }
  // id: number;
  // this.route.params.subscribe(params => {
  //   this.id = params['id'];
  // })
  ngOnInit() {
    this.usersform = this.formBuilder.group({

      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(350)]],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      designation: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]]

    });


  }

  get f() { return this.usersform.controls; }

  async onSubmit() {
    try {
      console.log("a")
      this.submitted = true
      if (this.usersform.invalid) return
      await this.Userservice.insertUsers(this.usersform.value)
      alert("users form created succesfully")
      this.navigateToUsers()
    }
    catch (err) {
      alert(err);
    }
  }

  navigateToUsers() {
    this.router.navigate(['users'])
  }
}