import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DestroyIntroductionService } from 'src/app/shared/services/destroy-introduction.service';
import { SearchHandlerService } from './search-handler.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {


  constructor(private introductionService: DestroyIntroductionService, private searchHandler: SearchHandlerService) { }

  ngOnInit(): void {
    this.introductionService.hideComponent();
  }

  ngOnDestroy(): void {
    this.introductionService.showComponent();
  }

  submitSearchForm(form: NgForm) {

    if (form.invalid) {
      return;
    }

    const payloadData = form.value
    this.searchHandler.updateData(payloadData);

  }

}
