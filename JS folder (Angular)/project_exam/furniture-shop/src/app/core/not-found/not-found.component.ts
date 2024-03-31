import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DestroyIntroductionService } from 'src/app/shared/services/destroy-introduction.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NotFoundComponent implements OnInit {

  constructor(private destroyIntroductionService: DestroyIntroductionService) {
  }

  ngOnInit(): void {
    this.destroyIntroductionService.hideComponent();
  }
  
}
