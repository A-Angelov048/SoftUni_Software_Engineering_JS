import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DestroyIntroductionService } from 'src/app/shared/services/destroy-introduction.service';
import { UserService } from 'src/app/shared/services/user-service.service';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../user.css']
})
export class LoginComponent implements OnInit, OnDestroy {


  constructor(
    private introductionService: DestroyIntroductionService, 
    private router: Router,
    private userService: UserService
    ) { }

  ngOnInit(): void {
    this.introductionService.hideComponent();
  }

  ngOnDestroy(): void {
    this.introductionService.showComponent();
  }


  submitLoginForm(form: NgForm): void {

    const payloadData: User = form.value 
    
    if (form.invalid) {
      form.setValue(
        { email: payloadData.email, password: '' }
      )
      return;
    }

    
    this.userService.login(payloadData).subscribe(() => {
      this.router.navigate(['/']);
    });

  }
}
