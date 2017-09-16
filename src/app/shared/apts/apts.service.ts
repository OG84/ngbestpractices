import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Apt } from './apt.model';
import { LoadingService } from '../loading.service';

@Injectable()
export class AptsService {
  constructor(private loadingService: LoadingService) {

  }

  getApts(): Observable<Apt[]> {
    this.loadingService.start();
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.createApts());
        observer.complete();
        this.loadingService.stop();
      }, 1500);
    });
  }

  private createApts(): Apt[] {
    const apts: Apt[] = [];
    for (let i = 0; i < 10; i++) {
      const apt: Apt = {
        id: i,
        name: `APT ${i}`
      };
      apts.push(apt);
    }
    return apts;
  }
}
