import { Component, OnDestroy, OnInit } from '@angular/core';
import { DestroyIntroductionService } from 'src/app/shared/services/destroy-introduction.service';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['../user.css']
})
export class CreateOfferComponent implements OnInit, OnDestroy {


  constructor(private introductionService: DestroyIntroductionService) { }

  ngOnInit(): void {
    this.introductionService.hideComponent();
  }

  ngOnDestroy(): void {
    this.introductionService.showComponent();
  }

}
