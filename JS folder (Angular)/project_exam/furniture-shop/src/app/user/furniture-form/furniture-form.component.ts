import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Furniture } from 'src/app/types/furniture';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-furniture-form',
  templateUrl: './furniture-form.component.html',
  styleUrls: ['../user.css']
})
export class FurnitureFormComponent {

  constructor(private router: Router, private api: ApiService) { }

  submitCreateForm(form: NgForm): void {

    if (form.invalid) {
      return;
    }

    const payloadData: Furniture = form.value;

    const body: Furniture = {
      ...payloadData,
      owner: '65d20bf3ae6903c8ce172165' // add userID here...
    };

    this.api.createFurniture(body).subscribe();
    this.router.navigate(['/shop']);
  }
}
