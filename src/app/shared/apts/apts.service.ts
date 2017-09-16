import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Apt } from './apt.model';
import { LoadingService } from '../loading.service';

@Injectable()
export class AptsService {
  constructor(private loadingService: LoadingService) {

  }

  getApts(): Observable<Apt[]> {
    console.log('get apts');

    const getApts: Observable<Apt[]> = Observable.create(observer => {
      setTimeout(() => {
        observer.next(this.createApts());
        observer.complete();
      }, 1000);
    });

    this.loadingService.start(getApts);
    return getApts;
  }

  private createApts(): Apt[] {
    const apts: Apt[] = [];
    for (let i = 0; i < 4; i++) {
      const apt: Apt = {
        id: i,
        name: `APT ${i}`
      };
      apts.push(apt);
    }
    return apts;
  }
}
