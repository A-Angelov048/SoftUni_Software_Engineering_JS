import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DestroyIntroductionService } from 'src/app/shared/services/destroy-introduction.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements AfterViewInit {

  toRemoveSection: boolean = true;

  constructor(private destroy: DestroyIntroductionService) {}

  ngAfterViewInit(): void {
    this.destroy.flag$.subscribe(curFlag => {
      this.toRemoveSection = curFlag;
    })
  }

}
