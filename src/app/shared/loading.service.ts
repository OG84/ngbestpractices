import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoadingService {

  loadingChanged = new Subject<boolean>();
  private isLoading: boolean;
  private numberOfStarts = 0;

  constructor() { }

  start(): void {
    this.numberOfStarts++;
    this.isLoading = true;
    this.loadingChanged.next(this.isLoading);
  }

  stop(): void {
    this.numberOfStarts--;
    if (this.numberOfStarts <= 0) {
      this.isLoading = false;
      this.loadingChanged.next(this.isLoading);
    }
  }
}
