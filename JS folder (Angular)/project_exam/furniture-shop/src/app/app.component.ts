import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { DestroyIntroductionService } from './shared/services/destroy-introduction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  introduction: boolean = true;

  constructor(private destroy: DestroyIntroductionService, private changeDetectorRef: ChangeDetectorRef) { }

  ngAfterViewInit(): void {

    this.destroy.flag$.subscribe(curFlag => {
      this.introduction = curFlag;
      this.changeDetectorRef.detectChanges()
    })
  }

}
