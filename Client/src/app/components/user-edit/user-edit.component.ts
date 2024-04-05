import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
  currentUser: User = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    age: NaN
  };
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
      this.getUserById(this.route.snapshot.params['id']);
  }

  getUserById(id: string): void {
    this.userService.getUserId(id).subscribe({
      next: (data) => {
        this.currentUser = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  updateUser(): void {

    this.userService
      .updateUser(this.currentUser.id, this.currentUser)
      .subscribe({
        next: (res) => {
          console.log(res);
          'This tutorial was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
}
