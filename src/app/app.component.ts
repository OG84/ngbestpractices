import { Component, OnInit } from '@angular/core';
import { LoadingService } from './shared/loading.service';

@Component({
  selector: 'ngbp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoading: boolean;

  constructor(
    private loadingService: LoadingService) {

  }

  ngOnInit(): void {
    this.loadingService.loadingChanged.subscribe(x => this.isLoading = x);
  }
}
