import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DestroyIntroductionService } from 'src/app/shared/services/destroy-introduction.service';
import { UserService } from 'src/app/shared/services/user-service.service';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../user.css']
})
export class RegisterComponent implements OnInit, OnDestroy {


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


  submitRegisterForm(form: NgForm) {

    const payloadData: User = form.value 

    if (form.invalid) {
      form.setValue(
        {
          username: payloadData.username,
          email: payloadData.email,
          password: '',
          rePassword: ''
        })
      return;
    }

    
    this.userService.register(payloadData).subscribe(() => {
      this.router.navigate(['/']);
    });

  }

}
