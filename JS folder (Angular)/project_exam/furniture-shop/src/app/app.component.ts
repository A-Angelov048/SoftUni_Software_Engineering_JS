import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DestroyIntroductionService } from './shared/services/destroy-introduction.service';
import { UserService } from './shared/services/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  introduction: boolean = true;

  constructor(
    private destroy: DestroyIntroductionService,
    private changeDetectorRef: ChangeDetectorRef,
    private userService: UserService,
  ) { }

  ngOnInit(): void {

    this.destroy.flag$.subscribe(curFlag => {
      this.introduction = curFlag;
      this.changeDetectorRef.detectChanges();
    })

    this.userService.showHideUser();
  }

}
