import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { DestroyIntroductionService } from 'src/app/shared/services/destroy-introduction.service';
import { Furniture } from 'src/app/types/furniture';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {

  currentFurniture: Furniture | undefined;

  constructor(private introductionService: DestroyIntroductionService, private api: ApiService, private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.introductionService.hideComponent();
    const furnitureId: string = this.router.snapshot.params['id'];

    this.api.getCurrentFurniture(furnitureId).subscribe({
      next: (x) => {
        this.currentFurniture = x;
      }
    });



  }

  ngOnDestroy(): void {
    this.introductionService.showComponent();
  }


}
