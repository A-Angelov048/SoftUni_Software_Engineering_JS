import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  furnitureId: string = '';
  userId: string | undefined;

  constructor(
    private introductionService: DestroyIntroductionService,
    private api: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.introductionService.hideComponent();
    this.furnitureId = this.activatedRoute.snapshot.params['id'];

    this.api.getCurrentFurniture(this.furnitureId).subscribe({
      next: (x) => {
        this.currentFurniture = x;
      }
    });

    try {
      const userId = localStorage.getItem('userId') || '';
      this.userId = JSON.parse(userId);
    } catch (error) {
      this.userId = undefined;
    }


  }

  ngOnDestroy(): void {
    this.introductionService.showComponent();
  }

  deleteFurniture(): void {
    this.api.deleteCurrentFurniture(this.furnitureId).subscribe(() => {
      this.router.navigate(['/shop']);
    });
  }

  buyFurniture(): void {
    this.api.buyCurrentFurniture(this.furnitureId).subscribe(() => {
      this.ngOnInit();
    })
  }

}
