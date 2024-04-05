import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DestroyIntroductionService } from 'src/app/shared/services/destroy-introduction.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../user.css']
})
export class RegisterComponent implements OnInit, OnDestroy {


  constructor(private introductionService: DestroyIntroductionService, private router: Router) { }

  ngOnInit(): void {
    this.introductionService.hideComponent();
  }

  ngOnDestroy(): void {
    this.introductionService.showComponent();
  }


  submitRegisterForm(form: NgForm) {

    const payloadData = form.value //add type!

    if (form.invalid) {
      form.setValue(
        {
          username: payloadData.username,
          email: payloadData.email,
          password: '',
          rePassword: ''
        }
      )
      return;
    }

    // this.userService.login(payload);
    this.router.navigate(['/']);
  }

}
