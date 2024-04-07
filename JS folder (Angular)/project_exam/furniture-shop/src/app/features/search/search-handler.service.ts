import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Furniture } from 'src/app/types/furniture';

@Injectable({
  providedIn: 'root'
})
export class SearchHandlerService {

  private dataSubject$$ = new Subject()

  dataFromForm$ = this.dataSubject$$.asObservable();

  updateData(data: Furniture) {
    this.dataSubject$$.next(data);
  }

}
