import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Furniture } from 'src/app/types/furniture';
import { Router } from '@angular/router';
import { SearchHandlerService } from 'src/app/features/search/search-handler.service';

@Component({
  selector: 'app-brand-container',
  templateUrl: './brand-container.component.html',
  styleUrls: ['./brand-container.component.css']
})
export class BrandContainerComponent implements OnInit {

  furnitureArr: Furniture[] | undefined = [];
  isHome: boolean = true;
  noProperties: boolean = false;

  constructor(private api: ApiService, private router: Router, private searchHandler: SearchHandlerService) { }


  ngOnInit(): void {
    if (this.router.url === '/') {

      this.api.getAllLatest().subscribe({
        next: (x) => {
          this.furnitureArr = x;
        }
      });

    } else if (this.router.url === '/search') {

      this.searchHandler.dataFromForm$.subscribe(curData => {
        this.api.searchFurniture(curData).subscribe({
          next: (x) => {

            if (x?.length === 0) {
              this.noProperties = true;
            } else {
              this.noProperties = false;
            }

            this.furnitureArr = x;
            this.isHome = false;

          }
        });
      });

    } else {

      this.api.getAllFurniture().subscribe({
        next: (x) => {
          this.furnitureArr = x;
          this.isHome = false;
        }
      });

    }

  }

}
