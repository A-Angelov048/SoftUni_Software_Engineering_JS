import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DestroyIntroductionService } from 'src/app/shared/services/destroy-introduction.service';
import { UserService } from 'src/app/shared/services/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(
    private userService: UserService,
    private route: Router,
  ) { }


  ngOnInit(): void {
    this.userService.loggedIn$.subscribe(curFlag => {
      this.isLoggedIn = curFlag;
    })
  }


  logoutUser(): void {

    this.userService.logout().subscribe({
      next: () => {
        this.userService.showHideUser();
        this.route.navigate(['/']);
      },
      error: () => {
        this.userService.showHideUser();
        this.route.navigate(['/']);
      }
    }
    )
  }
}
