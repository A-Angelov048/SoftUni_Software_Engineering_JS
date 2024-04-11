import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { DestroyIntroductionService } from 'src/app/shared/services/destroy-introduction.service';
import { Furniture } from 'src/app/types/furniture';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['../user.css']

})
export class EditComponent implements OnInit, OnDestroy {

  furnitureId: string = '';

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    category: ['', [Validators.required, Validators.minLength(4)]],
    year: [0, [Validators.required, Validators.min(1900), Validators.max(2024)]],
    materials: ['', [Validators.required, Validators.minLength(10)]],
    condition: ['', [Validators.required, Validators.minLength(6)]],
    imageUrl: ['', [Validators.required]],
    price: [0, [Validators.required, Validators.min(0)]],
    description: ['', [Validators.required, Validators.minLength(10)]],
  })

  constructor(
    private introductionService: DestroyIntroductionService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.introductionService.hideComponent();
    this.fetchData();

  }

  ngOnDestroy(): void {
    this.introductionService.showComponent();
  }

  fetchData(): void {

    this.furnitureId = this.activatedRoute.snapshot.params['id'];

    this.api.getCurrentFurniture(this.furnitureId).subscribe({
      next: (x) => {

        this.form.setValue({
          name: x.name,
          category: x.category,
          year: x.year,
          materials: x.materials,
          condition: x.condition,
          imageUrl: x.imageUrl,
          price: x.price,
          description: x.description
        })

      }

    })

  }

  edit() {

    if (this.form.invalid) {
      return;
    }

    const dataFromForm = this.form.value;
    const payload: Furniture = dataFromForm as Furniture

    this.api.editFurniture(payload, this.furnitureId).subscribe(() => {
      this.router.navigate([`/details/${this.furnitureId}`]);
    })

  }
}
