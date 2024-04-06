import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchHandlerService {

  private dataSubject$$ = new Subject()

  dataFromForm$ = this.dataSubject$$.asObservable();

  updateData(data: any) {
    this.dataSubject$$.next(data);
  }

}
