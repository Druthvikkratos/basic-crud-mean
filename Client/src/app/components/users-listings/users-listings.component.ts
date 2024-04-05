import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-listings',
  templateUrl: './users-listings.component.html',
  styleUrls: ['./users-listings.component.css']
})
export class UsersListingsComponent {
  users?: User[]

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.retrieveUsers();
  }

  retrieveUsers(): void {
    this.userService.getAll().subscribe({
      next: (data) => {
        this.users = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  deleteTutorial(id: any): void {
    this.userService.deleteUser(id).subscribe({
      next: (res) => {
        console.log(res);
        window.location.reload();
      },
      error: (e) => console.error(e)
    });
  }
}
