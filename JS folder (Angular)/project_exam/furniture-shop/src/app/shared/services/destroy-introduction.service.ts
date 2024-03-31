import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestroyIntroductionService {

  private flagSubject = new BehaviorSubject<boolean>(true);

  flag$ = this.flagSubject.asObservable();

  hideComponent() {
    this.flagSubject.next(false);
  }

}
