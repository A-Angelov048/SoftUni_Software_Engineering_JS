import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DestroyIntroductionService } from 'src/app/shared/services/destroy-introduction.service';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['../user.css']
})
export class CreateOfferComponent implements OnInit, OnDestroy {


  constructor(private introductionService: DestroyIntroductionService, private router: Router) { }

  ngOnInit(): void {
    this.introductionService.hideComponent();
  }

  ngOnDestroy(): void {
    this.introductionService.showComponent();
  }

  submitCreateForm(form: NgForm): void {

    const payloadData = form.value //add type!
    
    if (form.invalid) {
      return;
    }

    // this.userService.login(payloadData);
    // this.router.navigate(['/details/:id']);
  }
}
