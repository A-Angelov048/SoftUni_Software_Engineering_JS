import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { DestroyIntroductionService } from 'src/app/shared/services/destroy-introduction.service';
import { Furniture } from 'src/app/types/furniture';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['../user.css']
})
export class CreateOfferComponent implements OnInit, OnDestroy {


  constructor(private introductionService: DestroyIntroductionService, private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.introductionService.hideComponent();
  }

  ngOnDestroy(): void {
    this.introductionService.showComponent();
  }

  submitForm(form: NgForm): void {

    if (form.invalid) {
      return;
    }

    const payloadData: Furniture = form.value;

    this.api.createFurniture(payloadData).subscribe(() => {
      this.router.navigate(['/shop']);
    });
  }

}
