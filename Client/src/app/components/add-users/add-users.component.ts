import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent {
  user: User = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    age: 0,
    phoneNumber: 0
  };

  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    emailAddress: new FormControl(''),
    age: new FormControl(''),
    phoneNumber: new FormControl('')
  });
  submitted = false;
  constructor(
    private formBuilder: FormBuilder, 
    private userService: UserService,
    private router: Router
  ) {}

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailAddress: ['', Validators.required],
      age: ['', Validators.required]
    })
  }

  get f() {
    return this.registerForm.controls;
  }

  saveUser(): void {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    const data = {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      emailAddress: this.user.emailAddress,
      age: this.user.age
    };
    this.userService.createUser(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
        this.router.navigate(['/userslistings']);
      },
      error: (e) => console.error(e)
    });
  }

  onReset(): void {
    this.submitted = false;
    this.registerForm.reset();
  }

}
