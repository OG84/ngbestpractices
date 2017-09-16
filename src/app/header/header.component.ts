import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../shared/loading.service';

@Component({
  selector: 'ngbp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  progressMode = 'determinate';

  constructor(private loadingService: LoadingService) { }

  ngOnInit() {
    this.loadingService.loadingChanged.subscribe(isLoading => {
      if (isLoading) {
        this.progressMode = 'indeterminate';
      } else {
        this.progressMode = 'determinate';
      }
    });
  }

}
