import { NgFor } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DestroyIntroductionService } from 'src/app/shared/services/destroy-introduction.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../user.css']
})
export class LoginComponent implements OnInit, OnDestroy {


  constructor(private introductionService: DestroyIntroductionService, private router: Router) { }

  ngOnInit(): void {
    this.introductionService.hideComponent();
  }

  ngOnDestroy(): void {
    this.introductionService.showComponent();
  }


  submitLoginForm(form: NgForm): void {

    const payloadData = form.value //add type!

    if (form.invalid) {
      form.setValue(
        { email: payloadData.email, password: '' }
      )
      return;
    }

    // this.userService.login(payload);
    this.router.navigate(['/']);
  }
}
